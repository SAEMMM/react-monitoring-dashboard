export interface ChartPoint {
  label: string;
  value: number;
}

export interface ChartSeries {
  id: string;
  label: string;
  color: string;
  points: ChartPoint[];
}

export interface LineChartModel {
  labels: string[];
  series: ChartSeries[];
}