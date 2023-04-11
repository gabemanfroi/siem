import { DonutChart } from 'modules/Shared/components/Charts';
import { useTopMitreQuery } from 'modules/SecurityEvent/hooks/queries/useTopMitreQuery';
import { LoadingHandler } from 'modules/Shared/components';

const TopMitre = () => {
  const { topMitreLoading, topMitreData = {} } = useTopMitreQuery();

  const { labels, series } = topMitreData;
  const options = {
    series,
    labels,
  };

  return (
    <LoadingHandler loading={topMitreLoading}>
      <DonutChart options={options} />
    </LoadingHandler>
  );
};

export default TopMitre;
