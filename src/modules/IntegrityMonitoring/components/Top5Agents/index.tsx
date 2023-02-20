import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoringContext } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { ApexOptions } from 'apexcharts';

const Top5Agents = () => {
  const { integrityMonitoringTop5Agents } = useIntegrityMonitoringContext();
  if (!integrityMonitoringTop5Agents) return <></>;

  const { labels, series } = integrityMonitoringTop5Agents;
  const options: ApexOptions = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default Top5Agents;
