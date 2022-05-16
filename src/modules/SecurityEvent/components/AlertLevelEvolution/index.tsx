import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';

const AlertLevelEvolution = () => {
  const { alertLevelEvolution } = useSecurityEvent();

  if (!alertLevelEvolution) return <></>;

  const { series, categories } = alertLevelEvolution;

  const options: ApexOptions = {
    title: {
      text: 'Alert Level Evolution',
      style: {
        color: '#fff',
      },
    },
    series,
    xaxis: { categories, type: 'datetime' },
  };

  return <Histogram options={options} />;
};

export default AlertLevelEvolution;
