import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHARTS_PALETTE } from 'modules/Shared/core/Constants';

const DonutChartOptionsFactory = (options?: ApexOptions): ApexOptions => ({
  chart: {
    ...options?.chart,
    height: 300,
    type: 'donut',
  },
  legend: {
    ...options?.legend,
    position: 'right',
    labels: {
      colors: '#fff',
    },
  },
  labels: options?.labels || [],
  theme: {
    palette: DEFAULT_CHARTS_PALETTE,
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    ...options?.title,
    align: 'left',
    style: {
      color: '#fff',
    },
  },
  series: options?.series || [],
});

export default DonutChartOptionsFactory;
