import { Histogram } from 'modules/Shared/components/Charts';
import { useMitre } from 'modules/Mitre/contexts';

const TopTechniquesByAgent = () => {
  const { topTacticsByAgent } = useMitre();

  if (!topTacticsByAgent) return <></>;

  const { series, categories } = topTacticsByAgent;

  const options = {
    title: {
      text: 'Top Techniques By Agent',
      style: {
        color: '#fff',
      },
    },
    series,
    xaxis: { categories },
  };

  return <Histogram options={options} />;
};

export default TopTechniquesByAgent;
