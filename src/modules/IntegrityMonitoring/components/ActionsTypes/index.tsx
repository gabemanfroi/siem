import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';

const ActionsTypes = () => {
  const { actionsTypes } = useIntegrityMonitoring();

  if (!actionsTypes) return <></>;

  const { labels, series } = actionsTypes;
  const options = {
    series,
    labels,
    title: { text: 'Actions Types' },
  };

  return <DonutChart options={options} />;
};

export default ActionsTypes;
