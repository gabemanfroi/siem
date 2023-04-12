import { Histogram } from 'modules/Shared/components/Charts';
import { LoadingHandler } from 'modules/Shared/components';
import { useTopTacticsByAgentQuery } from 'modules/Mitre/hooks/queries/useTopTacticsByAgentQuery';

const TopTechniquesByAgent = () => {
  const { topTacticsByAgentIsLoading, topTacticsByAgentData } =
    useTopTacticsByAgentQuery();

  const { series, categories } = topTacticsByAgentData;

  const options = {
    chart: {
      stacked: true,
    },
    series,
    xaxis: { categories },
  };

  return (
    <LoadingHandler loading={topTacticsByAgentIsLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default TopTechniquesByAgent;
