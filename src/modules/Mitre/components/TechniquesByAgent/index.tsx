import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useMitreContext } from 'modules/Mitre/contexts';

const TechniquesByAgent = () => {
  const { techniquesByAgent } = useMitreContext();

  if (!techniquesByAgent) return <></>;

  const { series, categories } = techniquesByAgent;

  const options: ApexOptions = {
    chart: {
      stacked: true,
    },
    series,
    xaxis: { categories },
  };

  return <Histogram options={options} />;
};

export default TechniquesByAgent;
