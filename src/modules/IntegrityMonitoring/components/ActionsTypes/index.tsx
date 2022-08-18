import { DonutChart } from 'modules/Shared/components/Charts';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { ApexOptions } from 'apexcharts';

const ActionsTypes = () => {
  const { actionsTypes } = useIntegrityMonitoring();

  if (!actionsTypes) return <></>;

  const { labels, series } = actionsTypes;
  const options: ApexOptions = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default ActionsTypes;
