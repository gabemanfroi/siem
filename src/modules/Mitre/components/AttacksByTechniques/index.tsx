import { Histogram } from 'modules/Shared/components/Charts';
import { useAttacksByTechniqueQuery } from 'modules/Mitre/hooks/queries/useAttacksByTechniqueQuery';
import { LoadingHandler } from 'modules/Shared/components';

const AttacksByTechniques = () => {
  const { attacksByTechniqueData, attacksByTechniqueIsLoading } =
    useAttacksByTechniqueQuery();

  const { series, categories } = attacksByTechniqueData;

  const options = {
    style: {
      color: '#fff',
    },
    series,
    xaxis: { categories },
  };

  return (
    <LoadingHandler loading={attacksByTechniqueIsLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default AttacksByTechniques;
