// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `<div class="container"><router-outlet></router-outlet></div>`
// })
// export class AppComponent {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { DashboardComponent } from './components/dashboard.component';
// import { WidgetHostComponent } from './components/widget-host.component';
// import { dashboardReducer } from './store/dashboard.reducer';
// import { DashboardEffects } from './store/dashboard.effects';
// import { StatWidgetComponent } from './widgets/stat-widget/stat-widget.component';
// import { ChartWidgetComponent } from './widgets/chart-widget/chart-widget.component';
// import { TableWidgetComponent } from './widgets/table-widget/table-widget.component';
// import { HasRoleDirective } from './directives/role.directive';

// @NgModule({
//   declarations: [
   
//   ],
//   imports: [ DashboardComponent,
//     WidgetHostComponent,
//     StatWidgetComponent,
//     ChartWidgetComponent,
//     TableWidgetComponent,
//     HasRoleDirective,
//     BrowserModule,
//     StoreModule.forRoot({ dashboard: dashboardReducer }),
//     EffectsModule.forRoot([DashboardEffects])
//   ],
//   providers: []
// })
// export class AppComponent { }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, RouterOutlet],
  template: `<app-dashboard></app-dashboard>`,
})
export class AppComponent {}
