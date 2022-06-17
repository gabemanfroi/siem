import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';

const AlertsEvolutionTop5Agents = () => {
  const { alertsEvolutionTop5Agents } = useSecurityEvent();

  if (!alertsEvolutionTop5Agents) return <></>;

  const { series, categories } = alertsEvolutionTop5Agents;

  const options: ApexOptions = {
    title: {
      text: 'Alerts Evolution Top 5 Agents',
      style: {
        color: '#fff',
      },
    },
    series,
    xaxis: { categories, type: 'datetime' },
  };

  return <Histogram options={options} />;
};

export default AlertsEvolutionTop5Agents;
