export type WidgetType = 'chart' | 'table' | 'stat';
export interface TableRow {
  name: string;
  cvr: number;
  spend: number;
}
export interface WidgetConfig {
  id: string;
  type: string;
  title?: string;     
  cols?: number;       
  rows?: number;       
  inputs?: {
    value?: number;
    delta?: number;
    series?: number[];
    rows?: TableRow[];
  };
}
