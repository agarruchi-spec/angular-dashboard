import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetConfig } from '../models/widget';
import { StatWidgetComponent } from '../widgets/stat-widget/stat-widget.component';
import { ChartWidgetComponent } from '../widgets/chart-widget/chart-widget.component';
import { TableWidgetComponent } from '../widgets/table-widget/table-widget.component';

@Component({
  selector: 'app-widget-host',
  standalone: true,
  imports: [CommonModule, StatWidgetComponent, ChartWidgetComponent, TableWidgetComponent],
  template: `
   <div class="widget-card"
     [style.gridColumn]="'span ' + (config.cols || 3)"
     [style.minHeight.px]="(config.rows || 2) * 80">

    <h3>{{ config.title || 'Untitled Widget' }}</h3>

    <ng-container [ngSwitch]="config.type">
      <app-stat-widget *ngSwitchCase="'stat'" [config]="config"></app-stat-widget>
      <app-chart-widget *ngSwitchCase="'chart'" [config]="config"></app-chart-widget>
      <app-table-widget *ngSwitchCase="'table'" [config]="config"></app-table-widget>
    </ng-container>
    </div>
  `,
  styles: [`
    .widget {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 12px;
      background: #fff;
    }
    .widget-card {
      background: #fff;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      
      /* force equal size */
      min-height: 250px;  
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `]
})
export class WidgetHostComponent {
  @Input() config!: WidgetConfig;
}
