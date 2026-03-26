import type { ChartSeries } from '../types/chart';
import type { ErrorRateResponse } from '../types/api';

interface Params {
  response: ErrorRateResponse;
  id?: string;
  label?: string;
  color: string;
}

export const normalizeErrorRate = ({
  response,
  id = 'error-rate',
  label = 'Error Rate (%)',
  color,
}: Params): ChartSeries => {
  return {
    id,
    label,
    color,
    points: response.points.map((point) => ({
      label: point.timestamp,
      value: point.value,
    })),
  };
};