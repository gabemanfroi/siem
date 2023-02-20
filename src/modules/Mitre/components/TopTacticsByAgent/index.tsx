import { Histogram } from 'modules/Shared/components/Charts';
import { useMitreContext } from 'modules/Mitre/contexts';

const TopTechniquesByAgent = () => {
  const { topTacticsByAgent } = useMitreContext();

  if (!topTacticsByAgent) return <></>;

  const { series, categories } = topTacticsByAgent;

  const options = {
    chart: {
      stacked: true,
    },
    series,
    xaxis: { categories },
  };

  return <Histogram options={options} />;
};

export default TopTechniquesByAgent;
