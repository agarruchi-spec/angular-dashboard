import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WidgetHostComponent } from './widget-host.component';

import { StatWidgetComponent } from '../widgets/stat-widget/stat-widget.component';
import { ChartWidgetComponent } from '../widgets/chart-widget/chart-widget.component';
import { TableWidgetComponent } from '../widgets/table-widget/table-widget.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardComponent,
    WidgetHostComponent,
    StatWidgetComponent,
    ChartWidgetComponent,
    TableWidgetComponent
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}