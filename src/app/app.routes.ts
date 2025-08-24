import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: '', loadComponent: () => import('./components/dashboard.component').then(m => m.DashboardComponent) },
  { path: '**', redirectTo: '' }
];
