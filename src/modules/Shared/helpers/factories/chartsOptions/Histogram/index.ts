import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHARTS_PALETTE } from 'modules/Shared/core/Constants';

const HistogramOptionsFactory = (options?: ApexOptions): ApexOptions => ({
  chart: {
    redrawOnParentResize: true,
    toolbar: {
      show: true,
      tools: {
        zoom: true,
        zoomin: true,
      },
    },
    type: 'bar',
  },
  legend: {
    position: 'right',
  },
  theme: {
    palette: DEFAULT_CHARTS_PALETTE,
  },
  grid: {
    borderColor: '#ffffff22',
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  ...options,
});

export default HistogramOptionsFactory;
