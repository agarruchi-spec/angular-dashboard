import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WidgetConfig } from '../models/widget';
import { ConfigService } from '../services/config.service';
import { WidgetHostComponent } from './widget-host.component';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, WidgetHostComponent, DragDropModule],
  template: `
    <div class="controls">
      <select [(ngModel)]="selectedType">
        <option value="" disabled>Select widget type</option>
        <option *ngFor="let type of availableTypes" [value]="type">{{ type }}</option>
      </select>
      <button (click)="addWidget()">Add Widget</button>
    </div>

    <div class="dashboard-grid"
         cdkDropList
         (cdkDropListDropped)="drop($event)">
      <div *ngFor="let w of widgets; let i = index"
           cdkDrag>
        <app-widget-host [config]="w"></app-widget-host>
        <button class="remove" (click)="removeWidget(i)">✖</button>
      </div>
    </div>
  `,
  styles: [`
    .controls { margin-bottom: 1rem; }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }
    .remove {
      margin-top: 4px;
      background: red;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 2px 6px;
      cursor: pointer;
    }
  `]
})
export class DashboardComponent {
  widgets: WidgetConfig[] = [];
  availableTypes = ['stat', 'chart', 'table'];
  selectedType = this.availableTypes[0];

  constructor(private configService: ConfigService) {
    // load default
    this.configService.getDashboardConfig('admin')
      .subscribe(ws => this.widgets = ws);
  }

  addWidget() {
    if (!this.selectedType) return;

    this.configService.getWidgetByType(this.selectedType)
      .subscribe(widget => {
        this.widgets.push(widget);
      });

    // reset dropdown
    this.selectedType = this.availableTypes[0];  // or '' if using placeholder
  }


  removeWidget(index: number) {
    this.widgets.splice(index, 1);
  }

  drop(event: CdkDragDrop<WidgetConfig[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }
}