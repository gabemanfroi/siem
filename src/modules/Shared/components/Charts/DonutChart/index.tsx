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
      width="100%"
      height="100%"
      type="donut"
      series={series}
    />
  );
};

export default DonutChart;
