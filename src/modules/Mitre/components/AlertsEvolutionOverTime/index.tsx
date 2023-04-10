import { Histogram } from 'modules/Shared/components/Charts';
import { useMitreContext } from 'modules/Mitre/contexts';
import { ApexOptions } from 'apexcharts';

const AlertsEvolutionOverTime = () => {
  const { alertsEvolutionOverTime } = useMitreContext();

  if (!alertsEvolutionOverTime) return <></>;

  const { categories, series } = alertsEvolutionOverTime;
  const options: ApexOptions = {
    xaxis: {
      type: 'datetime',
      categories,
    },
    chart: {
      stacked: true,
    },

    series,
  };

  return <Histogram options={options} />;
};

export default AlertsEvolutionOverTime;
