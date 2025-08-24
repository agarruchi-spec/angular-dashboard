import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '.';
import { State } from './dashboard.reducer';

export const selectDashboard = createFeatureSelector<AppState, State>('dashboard');

export const selectWidgets = createSelector(selectDashboard, s => s.widgets);
export const selectRole = createSelector(selectDashboard, s => s.role);
export const selectLoading = createSelector(selectDashboard, s => s.loading);
export const selectError = createSelector(selectDashboard, s => s.error);
