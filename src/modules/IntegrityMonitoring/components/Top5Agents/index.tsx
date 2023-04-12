import { DonutChart } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useTop5AgentsQuery } from 'modules/IntegrityMonitoring/hooks/queries/useTop5AgentsQuery';
import { LoadingHandler } from 'modules/Shared/components';

const Top5Agents = () => {
  const { top5AgentsData, top5AgentsIsLoading } = useTop5AgentsQuery();

  const { labels, series } = top5AgentsData;
  const options: ApexOptions = {
    series,
    labels,
  };

  return (
    <LoadingHandler loading={top5AgentsIsLoading}>
      <DonutChart options={options} />
    </LoadingHandler>
  );
};

export default Top5Agents;
