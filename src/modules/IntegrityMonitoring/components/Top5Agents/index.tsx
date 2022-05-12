import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { ApexOptions } from 'apexcharts';

const Top5Agents = () => {
  const { top5Agents } = useIntegrityMonitoring();
  if (!top5Agents) return <></>;

  const { labels, series } = top5Agents;
  const options: ApexOptions = {
    series,
    labels,
    title: { text: 'Top 5 Agents - Integrity Monitoring' },
  };

  return <DonutChart options={options} />;
};

export default Top5Agents;
