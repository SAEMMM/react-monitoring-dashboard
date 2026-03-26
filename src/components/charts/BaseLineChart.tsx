import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { LineChartModel } from '../../types/chart';
import { toChartJsLineData } from '../../adapters/toChartJsLineData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface Props {
  model: LineChartModel;
  yAxisTitle?: string;
}

export function BaseLineChart({ model, yAxisTitle }: Props) {
  const data = toChartJsLineData(model);

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
    scales: {
      y: {
        title: {
          display: Boolean(yAxisTitle),
          text: yAxisTitle,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}