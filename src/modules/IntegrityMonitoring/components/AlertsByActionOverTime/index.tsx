import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useIntegrityMonitoringContext } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';

const AlertsByActionOverTime = () => {
  const { alertsByActionOverTime } = useIntegrityMonitoringContext();

  if (!alertsByActionOverTime) return <></>;

  const { categories, series } = alertsByActionOverTime;
  const options: ApexOptions = {
    xaxis: {
      type: 'datetime',
      categories,
    },
    series,
  };

  return <Histogram options={options} />;
};

export default AlertsByActionOverTime;
