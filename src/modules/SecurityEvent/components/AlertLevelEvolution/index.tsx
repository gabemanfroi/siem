import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useAlertLevelEvolutionQuery } from 'modules/SecurityEvent/hooks/queries/useAlertLevelEvolutionQuery';
import { LoadingHandler } from 'modules/Shared/components';

const AlertLevelEvolution = () => {
  const { alertLevelEvolutionData, alertLevelEvolutionIsLoading } =
    useAlertLevelEvolutionQuery();

  const { series, categories } = alertLevelEvolutionData;

  const options: ApexOptions = {
    series,
    chart: {
      type: 'bar',
      stacked: true,
    },
    xaxis: { categories, type: 'datetime' },
  };

  return (
    <LoadingHandler loading={alertLevelEvolutionIsLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default AlertLevelEvolution;
