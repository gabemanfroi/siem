import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useMitre } from 'modules/Mitre/contexts';

const TechniquesByAgent = () => {
  const { techniquesByAgent } = useMitre();

  if (!techniquesByAgent) return <></>;

  const { series, categories } = techniquesByAgent;

  const options: ApexOptions = {
    title: {
      text: 'Techniques By Agent',
      style: { color: '#fff' },
    },
    chart: {
      stacked: true
    },
    series,
    xaxis: { categories },
  };

  return <Histogram options={options} />;
};

export default TechniquesByAgent;
