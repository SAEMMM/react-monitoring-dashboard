import type { ChartSeries, LineChartModel } from '../types/chart';

export const buildLineChartModel = (series: ChartSeries[]): LineChartModel => {
  return {
    labels: series[0]?.points.map((point) => point.label) ?? [],
    series,
  };
};