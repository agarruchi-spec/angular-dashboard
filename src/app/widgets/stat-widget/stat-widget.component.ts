import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetConfig } from '../../models/widget';

@Component({
  selector: 'app-stat-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-widget">
    <div class="stat-value">
      {{ (config.inputs?.['value'] ?? 0) | number }}
    </div>
    <div class="stat-delta">
      Δ {{ (config.inputs?.['delta'] ?? 0) }}%
    </div>
    </div>
  `,
  styles: [`
    .stat {
      font-size: 20px;
      font-weight: bold;
    }
    .delta {
      font-size: 14px;
      color: gray;
    }
  `]
})
export class StatWidgetComponent {
  @Input() config!: WidgetConfig;
}
