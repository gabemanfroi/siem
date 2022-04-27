import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { PackagesByCVEMockFactory } from 'modules/Shared/helpers/factories';

const TechniquesByAgent = () => {
  const { categories, series } = PackagesByCVEMockFactory();
  const options: ApexOptions = {
    title: {
      text: 'Techniques By Agent',
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      stacked: true,
    },
    xaxis: {
      categories,
    },
    series,
  };

  return <Histogram options={options} />;
};

export default TechniquesByAgent;
