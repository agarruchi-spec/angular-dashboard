import { reducer, State } from './dashboard.reducer';
import * as A from './dashboard.actions';

describe('dashboard reducer', () => {
  it('should set loading on loadConfig', () => {
    const initial: State = { widgets: [], role: 'all', loading: false, error: null };
    const state = reducer(initial, A.loadConfig({ role: 'all' }));
    expect(state.loading).toBeTrue();
  });

  it('should handle reorder', () => {
    const initial: State = { widgets: [{id:'a', type:'stat', title:'A', cols:3, rows:2}, {id:'b', type:'stat', title:'B', cols:3, rows:2}] as any, role: 'all', loading: false, error: null };
    const state = reducer(initial, A.reorder({ order: ['b','a'] }));
    expect(state.widgets[0].id).toBe('b');
  });
});
