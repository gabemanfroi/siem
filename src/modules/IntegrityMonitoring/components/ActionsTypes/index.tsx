import { DonutChart } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useActionsTypesQuery } from 'modules/IntegrityMonitoring/hooks/queries/useActionsTypesQuery';
import { LoadingHandler } from 'modules/Shared/components';

const ActionsTypes = () => {
  const { actionsTypesData, actionsTypesIsLoading } = useActionsTypesQuery();

  const { labels, series } = actionsTypesData;
  const options: ApexOptions = {
    series,
    labels,
  };

  return (
    <LoadingHandler loading={actionsTypesIsLoading}>
      <DonutChart options={options} />
    </LoadingHandler>
  );
};

export default ActionsTypes;
