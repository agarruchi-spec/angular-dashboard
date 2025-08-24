import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetConfig, TableRow } from '../../models/widget';

@Component({
  selector: 'app-table-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
  <table style="width:100%; border-collapse: collapse;">
    <thead>
      <tr>
        <th style="text-align:left; border-bottom:1px solid #e5e7eb;">Name</th>
        <th style="text-align:right; border-bottom:1px solid #e5e7eb;">CVR (%)</th>
        <th style="text-align:right; border-bottom:1px solid #e5e7eb;">Spend</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let r of rows">
        <td style="padding:6px 0">{{r.name}}</td>
        <td style="padding:6px 0; text-align:right">{{r.cvr}}</td>
        <td style="padding:6px 0; text-align:right">{{r.spend | currency:'USD'}}</td>
      </tr>
    </tbody>
  </table>
  `
})
export class TableWidgetComponent {
  @Input() config!: WidgetConfig;

  // Make a typed getter for rows
  get rows(): TableRow[] {
    return this.config?.inputs?.['rows'] ?? [];
  }
}
