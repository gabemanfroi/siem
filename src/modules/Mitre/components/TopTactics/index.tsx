import { DonutChart } from 'modules/Shared/components/Charts';
import { useTopTacticsQuery } from 'modules/Mitre/hooks/queries/useTopTacticsQuery';
import { LoadingHandler } from 'modules/Shared/components';

const TopTactics = () => {
  const { topTacticsData, topTacticsLoading } = useTopTacticsQuery();

  const { labels, series } = topTacticsData;
  const options = {
    series,
    labels,
  };

  return (
    <LoadingHandler loading={topTacticsLoading}>
      <DonutChart options={options} />
    </LoadingHandler>
  );
};

export default TopTactics;
