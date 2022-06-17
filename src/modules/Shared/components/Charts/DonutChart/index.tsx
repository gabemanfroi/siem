import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { DonutChartOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';

interface DonutChartPropsInterface {
  options: ApexOptions;
}

const DonutChart = ({ options }: DonutChartPropsInterface) => {
  const { series, labels } = options;

  return (
    <ReactApexChart
      options={DonutChartOptionsFactory({ ...options, labels })}
      type="donut"
      height="100%"
      series={series}
    />
  );
};

export default DonutChart;
