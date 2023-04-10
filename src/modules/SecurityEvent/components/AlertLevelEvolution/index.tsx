import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';

const AlertLevelEvolution = () => {
  const { alertLevelEvolution } = useSecurityEventContext();

  if (!alertLevelEvolution) return <></>;

  const { series, categories } = alertLevelEvolution;

  const options: ApexOptions = {
    series,
    chart: {
      type: 'bar',
      stacked: true,
    },
    xaxis: { categories, type: 'datetime' },
  };

  return <Histogram options={options} />;
};

export default AlertLevelEvolution;
