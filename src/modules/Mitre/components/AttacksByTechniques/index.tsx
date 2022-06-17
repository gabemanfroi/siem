import { Histogram } from 'modules/Shared/components/Charts';
import { useMitre } from 'modules/Mitre/contexts';

const AttacksByTechniques = () => {
  const { attacksByTechnique } = useMitre();

  if (!attacksByTechnique) return <></>;

  const { series, categories } = attacksByTechnique;

  const options = {
    title: {
      text: 'Attacks By Technique',
      style: {
        color: '#fff',
      },
    },
    series,
    xaxis: { categories },
  };

  return <Histogram options={options} />;
};

export default AttacksByTechniques;
