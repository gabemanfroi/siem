import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { ApexOptions } from 'apexcharts';
import { Histogram } from 'modules/Shared/components/Charts';

const AlertsEvolutionByAgents = () => {
  const { alertsEvolutionByAgents } = useVirusTotal();

  if (!alertsEvolutionByAgents) return <></>;
  const { series, categories } = alertsEvolutionByAgents;

  const options: ApexOptions = {
    xaxis: {
      type: 'datetime',
      categories,
    },
    title: {
      text: 'Alerts Evolution By Agents',
    },
    series,
  };

  return <Histogram options={options} />;
};

export default AlertsEvolutionByAgents;
