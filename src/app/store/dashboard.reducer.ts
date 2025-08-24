// import { createReducer, on } from '@ngrx/store';
// import * as Actions from './dashboard.actions';
// import { WidgetConfig } from '../models/widget';

// export interface State {
//   widgets: WidgetConfig[];
//   role: string;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: State = {
//   widgets: [], role: 'all', loading: false, error: null
// };

// export const reducer = createReducer(
//   initialState,
//   on(Actions.setRole, (state, { role }) => ({ ...state, role })),
//   on(Actions.loadConfig, (state) => ({ ...state, loading: true, error: null })),
//   on(Actions.loadConfigSuccess, (state, { widgets }) => ({ ...state, loading: false, widgets })),
//   on(Actions.loadConfigFailure, (state, { error }) => ({ ...state, loading: false, error })),
//   on(Actions.reorder, (state, { order }) => ({
//     ...state,
//     widgets: order.map(id => state.widgets.find(w => w.id === id)!).filter(Boolean)
//   })),
//   on(Actions.addWidget, (state, { widget }) => ({ ...state, widgets: [...state.widgets, widget] })),
//   on(Actions.removeWidget, (state, { id }) => ({ ...state, widgets: state.widgets.filter(w => w.id !== id) }))
// );

import { createReducer, on } from "@ngrx/store";
import * as DashboardActions from "./dashboard.actions";

export interface State {
  widgets: any[];
  role: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  widgets: [],
  role: null,
  loading: false,
  error: null,
};

// THIS MUST BE EXACTLY NAMED dashboardReducer
export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadWidgetsSuccess, (state, { widgets }) => ({
    ...state,
    widgets,
    loading: false
  })),
  on(DashboardActions.loadWidgetsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(DashboardActions.setRole, (state, { role }) => ({
    ...state,
    role
  })),
  on(DashboardActions.loadWidgets, (state) => ({
    ...state,
    loading: true
  }))
);
