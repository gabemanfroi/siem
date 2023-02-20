import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';

const AlertsEvolutionTop5Agents = () => {
  const { alertsEvolutionTop5Agents } = useSecurityEventContext();

  if (!alertsEvolutionTop5Agents) return <></>;

  const { series, categories } = alertsEvolutionTop5Agents;

  const options: ApexOptions = {
    series,
    chart: {
      stacked: true,
    },
    xaxis: { categories, type: 'datetime' },
  };

  return <Histogram options={options} />;
};

export default AlertsEvolutionTop5Agents;
