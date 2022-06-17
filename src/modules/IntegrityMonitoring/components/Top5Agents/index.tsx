import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { ApexOptions } from 'apexcharts';

const Top5Agents = () => {
  const { integrityMonitoringTop5Agents } = useIntegrityMonitoring();
  if (!integrityMonitoringTop5Agents) return <></>;

  const { labels, series } = integrityMonitoringTop5Agents;
  const options: ApexOptions = {
    series,
    labels,
    title: { text: 'Top 5 Agents - Integrity Monitoring' },
  };

  return <DonutChart options={options} />;
};

export default Top5Agents;
