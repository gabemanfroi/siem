import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { HistogramOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';

interface HistogramPropsInterface {
  options: ApexOptions;
}

const Histogram = ({ options }: HistogramPropsInterface) => {
  const { series } = options;

  if (!series) return <></>;

  return (
    <ReactApexChart
      options={HistogramOptionsFactory(options)}
      series={series}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default Histogram;
