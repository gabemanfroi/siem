import { DonutChart } from 'modules/Shared/components/Charts';
import { useMitreContext } from 'modules/Mitre/contexts';

const TopTactics = () => {
  const { topTactics } = useMitreContext();

  if (!topTactics) return <></>;

  const { labels, series } = topTactics;
  const options = {
    series,
    labels,
  };

  return <DonutChart options={options} />;
};

export default TopTactics;
