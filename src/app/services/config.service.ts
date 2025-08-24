import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, of, throwError } from 'rxjs';
import { TableRow, WidgetConfig } from '../models/widget';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  // Simulate API: sometimes error, otherwise return default widgets
  
  getWidgetByType(type: string): Observable<WidgetConfig> {
    switch (type) {
      case 'stat':
        return of({
          id: 'w' + Math.random(),
          title: 'Stat',
          type: 'stat',
          cols: 1,
          rows: 1,
          inputs: { value: 125000,
    delta: 12,
    target: 150000,
    lastUpdated: '2025-08-23' }
        });
      case 'chart':
        return of({
          id: 'w' + Math.random(),
          title: 'Chart',
          type: 'chart',
          cols: 2,
          rows: 2,
          inputs: { series: [10, 20, 30] }
        });
      case 'table':
        return of({
          id: 'w' + Math.random(),
          title: 'Table',
          type: 'table',
          cols: 3,
          rows: 2,
          inputs: {
            rows: [
              { name: 'Alice', cvr: 2.1, spend: 500 },
              { name: 'Bob', cvr: 3.4, spend: 750 }
            ] as TableRow[]
          }
        });
      default:
        throw new Error('Unknown widget type: ' + type);
    }
  }
  getDashboardConfig(type: string): Observable<WidgetConfig[]> {

    switch (type) {
      case 'sales':
        return of([
          {
            id: 'w1',
            title: 'Sales Overview',
            type: 'stat',
            cols: 3,
            rows: 2,
            inputs: { value: 1200, delta: 5 }
          },
          {
            id: 'w2',
            title: 'Sales Revenue',
            type: 'stat',
            cols: 1,
            rows: 1,
            inputs: {
              value: 125000,
              delta: 12,
              target: 150000,
              lastUpdated: '2025-08-23'
            }
          }
        ]);

      case 'performance':
        return of([
          {
            id: 'w3',
            title: 'Performance',
            type: 'chart',
            cols: 4,
            rows: 3,
            inputs: { series: [10, 20, 30, 40] }
          }
        ]);

      case 'users':
        return of([
          {
            id: 'w4',
            title: 'User Stats',
            type: 'table',
            cols: 3,
            rows: 2,
            inputs: {
              rows: [
                { name: 'Alice', cvr: 2.1, spend: 500 },
                { name: 'Bob', cvr: 3.4, spend: 750 },
                { name: 'Charlie', cvr: 1.8, spend: 300 }
              ]
            }
          }
        ]);

      default:
        return of([]);
    }
  }
}
