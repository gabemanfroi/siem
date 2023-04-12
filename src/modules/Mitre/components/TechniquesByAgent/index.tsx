import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useTechniquesByAgentQuery } from 'modules/Mitre/hooks/queries/useTechniquesByAgentQuery';
import { LoadingHandler } from 'modules/Shared/components';

const TechniquesByAgent = () => {
  const { techniquesByAgentIsLoading, techniquesByAgentData } =
    useTechniquesByAgentQuery();

  const { series, categories } = techniquesByAgentData;

  const options: ApexOptions = {
    chart: {
      stacked: true,
    },
    series,
    xaxis: { categories },
  };

  return (
    <LoadingHandler loading={techniquesByAgentIsLoading}>
      <Histogram options={options} />
    </LoadingHandler>
  );
};

export default TechniquesByAgent;
