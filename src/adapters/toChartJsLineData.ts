import type { ChartData } from 'chart.js';
import type { LineChartModel } from '../types/chart';

export const toChartJsLineData = (
  model: LineChartModel
): ChartData<'line'> => {
  return {
    labels: model.labels,
    datasets: model.series.map((series) => ({
      label: series.label,
      data: series.points.map((point) => point.value),
      borderColor: series.color,
      backgroundColor: series.color,
      tension: 0.4,
    })),
  };
};