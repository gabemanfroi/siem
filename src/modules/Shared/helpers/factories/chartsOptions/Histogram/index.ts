import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHARTS_PALETTE } from 'modules/Shared/core/Constants';

const HistogramOptionsFactory = (options?: ApexOptions): ApexOptions => ({
  dataLabels: {
    ...options?.dataLabels,
    enabled: false,
  },

  chart: {
    ...options?.chart,
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
  grid: {
    borderColor: '#ffffff',
    xaxis: {
      ...options?.xaxis,
      lines: {
        show: false,
      },
    },
  },
  legend: {
    position: 'right',
    labels: {
      colors: '#fff',
    },
  },
  series: options?.series || [],
  theme: {
    palette: DEFAULT_CHARTS_PALETTE,
  },
  title: {
    ...options?.title,
    style: {
      color: '#fff',
    },
  },
  xaxis: {
    ...options?.xaxis,
    labels: {
      rotate: -90,
      style: {
        colors: '#fff',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#fff',
      },
    },
  },
});

export default HistogramOptionsFactory;
