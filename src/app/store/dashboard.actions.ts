import { createAction, props } from '@ngrx/store';
import { WidgetConfig } from '../models/widget';

export const loadConfig = createAction('[Dashboard] Load Config', props<{ role: string }>());

export const loadConfigSuccess = createAction('[Dashboard] Load Config Success', props<{ widgets: WidgetConfig[] }>());

export const loadConfigFailure = createAction('[Dashboard] Load Config Failure', props<{ error: string }>());

export const reorder = createAction('[Dashboard] Reorder', props<{ order: string[] }>());

export const addWidget = createAction('[Dashboard] Add Widget', props<{ widget: WidgetConfig }>());

export const removeWidget = createAction('[Dashboard] Remove Widget', props<{ id: string }>());

export const setRole = createAction('[Dashboard] Set Role', props<{ role: string }>());

export const persistLayout = createAction('[Dashboard] Persist Layout');

export const hydrateFromStorage = createAction('[Dashboard] Hydrate From Storage');

//import { createAction, props } from "@ngrx/store";

export const loadWidgets = createAction("[Dashboard] Load Widgets");

export const loadWidgetsSuccess = createAction(
  "[Dashboard] Load Widgets Success",
  props<{ widgets: any[] }>()
);

export const loadWidgetsFailure = createAction(
  "[Dashboard] Load Widgets Failure",
  props<{ error: any }>()
);

export const addRandomWidget = createAction('[Dashboard] Add Random Widget');

