import { Histogram } from 'modules/Shared/components/Charts';
import { useMitreContext } from 'modules/Mitre/contexts';

const AttacksByTechniques = () => {
  const { attacksByTechnique } = useMitreContext();

  if (!attacksByTechnique) return <></>;

  const { series, categories } = attacksByTechnique;

  const options = {
    style: {
      color: '#fff',
    },
    series,
    xaxis: { categories },
  };

  return <Histogram options={options} />;
};

export default AttacksByTechniques;
