import { ApexOptions } from 'apexcharts';
import HistogramOptionsFactory from '../Histogram';

const DateHistogramOptionsFactory = (options?: ApexOptions): ApexOptions =>
  HistogramOptionsFactory({
    chart: {
      stacked: true,
      type: 'bar',
      stackType: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    ...options,
  });

export default DateHistogramOptionsFactory;
