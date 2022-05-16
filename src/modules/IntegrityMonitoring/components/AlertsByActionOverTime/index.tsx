import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';

const AlertsByActionOverTime = () => {
  const { alertsByActionOverTime } = useIntegrityMonitoring();

  if (!alertsByActionOverTime) return <></>;

  const { categories, series } = alertsByActionOverTime;
  const options: ApexOptions = {
    xaxis: {
      type: 'datetime',
      categories,
    },
    title: {
      text: 'Alerts by Action Over Time',
    },
    series,
  };

  return <Histogram options={options} />;
};

export default AlertsByActionOverTime;
