import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as A from './dashboard.actions';
import { ConfigService } from '../services/config.service';
import { catchError, map, mergeMap, of, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDashboard } from './dashboard.selectors';

export const DashboardEffects = class {
  private actions$ = inject(Actions);
  private api = inject(ConfigService);
  private store = inject(Store);

  load$ = createEffect(() => this.actions$.pipe(
    ofType(A.loadConfig),
    mergeMap(({ role }) => this.api.getDashboardConfig(role).pipe(
      map(widgets => A.loadConfigSuccess({ widgets })),
      catchError(err => of(A.loadConfigFailure({ error: err.message ?? 'Error' })))
    ))
  ));

  persist$ = createEffect(() => this.actions$.pipe(
    ofType(A.reorder, A.addWidget, A.removeWidget, A.loadConfigSuccess),
    withLatestFrom(this.store.select(selectDashboard)),
    tap(([_, state]) => {
      localStorage.setItem('dashboard', JSON.stringify(state));
    })
  ), { dispatch: false });

  hydrate$ = createEffect(() => this.actions$.pipe(
    ofType(A.hydrateFromStorage),
    mergeMap(() => {
      try {
        const raw = localStorage.getItem('dashboard');
        if (!raw) return of({ type: '[Noop]' });
        const parsed = JSON.parse(raw);
        return of(A.setRole({ role: parsed.role }), A.loadConfigSuccess({ widgets: parsed.widgets }));
      } catch {
        return of({ type: '[Noop]' });
      }
    })
  ));
}
