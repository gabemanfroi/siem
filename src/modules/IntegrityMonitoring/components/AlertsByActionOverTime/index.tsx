import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useAlertsByActionOverTimeQuery } from 'modules/IntegrityMonitoring/hooks/queries/useAlertsByActionOverTimeQuery';
import { LoadingHandler } from 'modules/Shared/components';

const AlertsByActionOverTime = () => {
  const { alertsByActionOverTimeData, alertsByActionOverTimeIsLoading } =
    useAlertsByActionOverTimeQuery();

  const { categories, series } = alertsByActionOverTimeData;
  const options: ApexOptions = {
    xaxis: {
      type: 'datetime',
      categories,
    },
    series,
  };

  return (
    <LoadingHandler loading={alertsByActionOverTimeIsLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default AlertsByActionOverTime;
