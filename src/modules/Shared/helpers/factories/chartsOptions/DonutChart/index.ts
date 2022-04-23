import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHARTS_PALETTE } from 'modules/Shared/core/Constants';

const DonutChartOptionsFactory = (options?: ApexOptions): ApexOptions => ({
  chart: {
    height: 300,
    type: 'donut',
  },
  legend: {
    position: 'right',
  },
  theme: {
    palette: DEFAULT_CHARTS_PALETTE,
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: 'Eventos Por Criticidade',
    align: 'left',
    style: {
      color: '#000',
    },
  },
  ...options,
});

export default DonutChartOptionsFactory;
