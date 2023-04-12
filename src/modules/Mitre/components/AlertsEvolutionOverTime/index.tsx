import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useAlertsEvolutionOverTimeQuery } from 'modules/Mitre/hooks/queries/useAlertsEvolutionOverTimeQuery';
import { LoadingHandler } from 'modules/Shared/components';

const AlertsEvolutionOverTime = () => {
  const { alertsEvolutionOverTimeLoading, alertsEvolutionOverTimeData } =
    useAlertsEvolutionOverTimeQuery();

  const { categories, series } = alertsEvolutionOverTimeData;
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

  return (
    <LoadingHandler loading={alertsEvolutionOverTimeLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default AlertsEvolutionOverTime;
