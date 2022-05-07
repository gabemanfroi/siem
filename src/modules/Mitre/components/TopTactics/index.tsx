import { DonutChart } from 'modules/Shared/components/Charts';
import { useMitre } from 'modules/Mitre/contexts';

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