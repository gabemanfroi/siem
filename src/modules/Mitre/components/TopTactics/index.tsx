import { DonutChart } from 'modules/Shared/components/Charts';
import { useMitre } from 'modules/Shared/contexts';

const TopTactics = () => {
  const { topTactics } = useMitre();

  if (!topTactics) return <></>;

  const { labels, series } = topTactics;
  const options = {
    series,
    labels,
    title: { text: 'Top Tactics' },
  };

  return <DonutChart options={options} />;
};

export default TopTactics;
