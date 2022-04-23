import { ApexOptions } from 'apexcharts';
import HistogramOptionsFactory from '../Histogram';

const DateHistogramOptionsFactory = (options?: ApexOptions): ApexOptions =>
  HistogramOptionsFactory({
    chart: {
      stacked: true,
      type: 'bar',
      stackType: '100%',
    },
    ...options,
  });

export default DateHistogramOptionsFactory;
