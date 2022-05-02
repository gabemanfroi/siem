import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { LoadingHandler } from 'modules/Shared/components';
import { HistogramOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';

interface HistogramPropsInterface {
  options: ApexOptions;
}

const Histogram = ({ options }: HistogramPropsInterface) => {
  const { series } = options;

  if (!series) return <></>;

  return (
    <LoadingHandler>
      <ReactApexChart
        options={HistogramOptionsFactory(options)}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
    </LoadingHandler>
  );
};

export default Histogram;
