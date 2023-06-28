import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHARTS_PALETTE } from 'modules/Shared/core/constants';

export const LineChartFactory = (options?: ApexOptions): ApexOptions => ({
  stroke: {
    curve: 'smooth',
  },
  fill: {
    type: 'gradient',
  },
  dataLabels: {
    ...options?.dataLabels,
    enabled: false,
  },
  chart: {
    ...options?.chart,

    redrawOnParentResize: true,
    toolbar: {
      show: false,
    },
    parentHeightOffset: 0,
    type: 'line',
    animations: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    borderColor: '#ffffff',
    xaxis: {
      ...options?.grid?.xaxis,
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
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      rotate: -90,
      style: {
        colors: '#fff',
      },
      show: false,
    },
    ...options?.xaxis,
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: '#fff',
      },
      show: false,
    },
  },
  tooltip: {
    x: { format: 'dd/MM/yy HH:mm' },
  },
});
