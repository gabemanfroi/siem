import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { LineChartFactory } from 'modules/Shared/helpers/factories/chartsOptions/LineChart';
import { useNotableAgentsQuery } from 'modules/Agent/hooks/queries/useNotableAgentsQuery';

interface Props {
  options: ApexOptions;
}

export const LineChart = ({ options }: Props) => {
  const { series } = options;

  const { notableAgentsLoading } = useNotableAgentsQuery();

  if (notableAgentsLoading) return <></>;

  return (
    <ReactApexChart
      options={LineChartFactory(options)}
      series={series}
      type="line"
      height="100%"
    />
  );
};
