import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useAlertEvolutionTop5AgentsQuery } from 'modules/SecurityEvent/hooks/queries/useAlertEvolutionTop5AgentsQuery';
import { LoadingHandler } from 'modules/Shared/components';

const AlertsEvolutionTop5Agents = () => {
  const { top5AgentsData = {}, alertEvolutionTop5AgentsLoading } =
    useAlertEvolutionTop5AgentsQuery();

  const { series, categories } = top5AgentsData;

  const options: ApexOptions = {
    series,
    chart: {
      stacked: true,
    },
    xaxis: { categories, type: 'datetime' },
  };

  return (
    <LoadingHandler loading={alertEvolutionTop5AgentsLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default AlertsEvolutionTop5Agents;
