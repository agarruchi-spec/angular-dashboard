import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { dashboardReducer } from './app/store/dashboard.reducer';
import { DashboardEffects } from './app/store/dashboard.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ dashboard: dashboardReducer }),
    provideEffects([DashboardEffects])
  ]
}).catch(err => console.error(err));
