import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { TrendPoint, TrendSeries } from '../../types/dashboard';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface Props {
  data: TrendPoint[];
  trendSeries?: TrendSeries[];
}

const palette = {
  Web: '#1976d2',
  Android: '#ed6c02',
  iOS: '#2e7d32',
};

export function ErrorTrendChart({ data, trendSeries }: Props) {
  const labels =
    trendSeries && trendSeries.length > 0
      ? trendSeries[0].points.map((point) => point.time)
      : data.map((point) => point.time);

  const datasets =
    trendSeries && trendSeries.length > 0
      ? trendSeries.map((series) => ({
          label: `${series.label} Error Rate (%)`,
          data: series.points.map((point) => point.errorRate),
          borderColor: palette[series.label],
          backgroundColor: palette[series.label],
          tension: 0.4,
        }))
      : [
          {
            label: 'Error Rate (%)',
            data: data.map((point) => point.errorRate),
            borderColor: '#d32f2f',
            backgroundColor: 'rgba(211,47,47,0.2)',
            tension: 0.4,
          },
          {
            label: 'Response Time (ms)',
            data: data.map((point) => point.responseTime),
            borderColor: '#1976d2',
            backgroundColor: 'rgba(25,118,210,0.2)',
            tension: 0.4,
            yAxisID: 'y1',
          },
        ];

  const chartData: ChartData<'line'> = {
    labels,
    datasets,
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales:
      trendSeries && trendSeries.length > 0
        ? {
            y: {
              title: {
                display: true,
                text: 'Error Rate (%)',
              },
            },
          }
        : {
            y: {
              title: {
                display: true,
                text: 'Error Rate (%)',
              },
            },
            y1: {
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
              title: {
                display: true,
                text: 'Response Time (ms)',
              },
            },
          },
  };

  return <Line data={chartData} options={options} />;
}