import { DonutChart } from 'modules/Shared/components/Charts';

const Top5Agents = () => {
  const { securityEventTop5Agents } = {
    securityEventTop5Agents: { labels: [], series: [] },
  };

  if (!securityEventTop5Agents) return <></>;

  const { labels, series } = securityEventTop5Agents;
  const options = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default Top5Agents;
