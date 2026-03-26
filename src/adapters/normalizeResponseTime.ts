import type { ChartSeries } from '../types/chart';
import type { ResponseTimeResponse } from '../types/api';

interface Params {
  response: ResponseTimeResponse;
  id?: string;
  label?: string;
  color: string;
}

export const normalizeResponseTime = ({
  response,
  id = 'response-time',
  label = 'Response Time (ms)',
  color,
}: Params): ChartSeries => {
  return {
    id,
    label,
    color,
    points: response.items.map((item) => ({
      label: item.timeLabel,
      value: item.avgMs,
    })),
  };
};