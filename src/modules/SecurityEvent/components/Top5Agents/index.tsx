import { DonutChart } from 'modules/Shared/components/Charts';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const Top5Agents = () => {
  const { securityEventTop5Agents } = useSecurityEventContext();

  if (!securityEventTop5Agents) return <></>;

  const { labels, series } = securityEventTop5Agents;
  const options = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default Top5Agents;
