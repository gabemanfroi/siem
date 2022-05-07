import { Histogram } from 'modules/Shared/components/Charts';
import { useMitre } from 'modules/Mitre/contexts';

const AttacksByTechnique = () => {
  const { attacksByTechniques } = useMitre();

  if (!attacksByTechniques) return <></>;

  const { series, categories } = attacksByTechniques;

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

export default AttacksByTechnique;
