// // src/app/store/index.ts
// import { DashboardState, dashboardReducer } from './dashboard.reducer';

// export interface AppState {
//   dashboard: DashboardState;
// }

// export const reducers = {
//   dashboard: dashboardReducer
// };

import { ActionReducerMap } from '@ngrx/store';
import * as fromDashboard from './dashboard.reducer';

export interface AppState {
  dashboard: fromDashboard.State; // <-- use your slice state
}

export const reducers: ActionReducerMap<AppState> = {
  dashboard: fromDashboard.dashboardReducer, // <-- exported reducer
};
