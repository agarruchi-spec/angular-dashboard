import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, of, throwError } from 'rxjs';
import { TableRow, WidgetConfig } from '../models/widget';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  // Simulate API: sometimes error, otherwise return default widgets
  //   getDashboardConfig(role: string) {
  //     const shouldError = false; // toggle to simulate API failure
  //     if (shouldError) {
  //       return throwError(() => new Error('Failed to load configuration')).pipe(delay(500));
  //     }
  //     const all: WidgetConfig[] = [
  //       { id: 'w1', type: 'stat', title: 'Total Revenue', cols: 3, rows: 2, inputs: { value: 120000, delta: 5 } },
  //       { id: 'w2', type: 'chart', title: 'Monthly Sales', cols: 6, rows: 4, inputs: { series: [5,10,7,12,9,14] } },
  //       { id: 'w3', type: 'table', title: 'Top Campaigns', cols: 3, rows: 4, inputs: { rows: [
  //       { name: 'Campaign 1', cvr: 12, spend: 1200 },
  //       { name: 'Campaign 2', cvr: 8, spend: 800 }
  //   ] } },
  //   { id: 'w4', type: 'stat', title: 'Active Users', cols: 3, rows: 2, inputs: { value: 4500, delta: 2 } }
  // ];
  //     return of(all).pipe(delay(400));
  //   }
getWidgetByType(type: string): Observable<WidgetConfig> {
    switch (type) {
      case 'stat':
        return of({
          id: 'w' + Math.random(),
          title: 'New Stat',
          type: 'stat',
          cols: 1,
          rows: 1,
          inputs: { value: 42, delta: 5 }
        });
      case 'chart':
        return of({
          id: 'w' + Math.random(),
          title: 'New Chart',
          type: 'chart',
          cols: 2,
          rows: 2,
          inputs: { series: [10, 20, 30] }
        });
      case 'table':
        return of({
          id: 'w' + Math.random(),
          title: 'New Table',
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
            title: 'Revenue',
            type: 'stat',
            cols: 2,
            rows: 1,
            inputs: { value: 89000, delta: 12 }
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





