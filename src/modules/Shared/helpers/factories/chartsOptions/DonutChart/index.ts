import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHARTS_PALETTE } from 'modules/Shared/core/constants';

const DonutChartOptionsFactory = (options?: ApexOptions): ApexOptions => ({
  chart: {
    ...options?.chart,
    height: 300,
    type: 'donut',
    animations: {
      enabled: false,
    },
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
    enabled: options?.dataLabels?.enabled,
  },
  title: {
    align: 'left',
    ...options?.title,
    style: {
      color: '#fff',
    },
  },
  series: options?.series || [],
});

export default DonutChartOptionsFactory;
