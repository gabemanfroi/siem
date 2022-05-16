import { DonutChart } from 'modules/Shared/components/Charts';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const Top5Agents = () => {
  const { securityEventTop5Agents } = useSecurityEvent();

  if (!securityEventTop5Agents) return <></>;

  const { labels, series } = securityEventTop5Agents;
  const options = {
    series,
    labels,
    title: { text: 'Top Tactics' },
  };

  return <DonutChart options={options} />;
};

export default Top5Agents;
