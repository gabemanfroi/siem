import { Histogram } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { PackagesByCVEMockFactory } from 'modules/Shared/helpers/factories';
import { useEffect, useState } from 'react';
import { IChartSeries } from 'modules/Shared/types/charts/Core';
import { useDashboard } from 'modules/Shared/contexts';

const TechniquesByAgent = () => {
  const { techniquesByAgent } = useDashboard();
  const [series, setSeries] = useState<IChartSeries[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [options, setOptions] = useState<ApexOptions>({
    title: {
      text: 'Techniques By Agent',
      style: {
        color: '#fff',
      },
    },
  });

  useEffect(() => {
    if (techniquesByAgent) {
      setSeries(techniquesByAgent.series);
      setCategories(techniquesByAgent.categories);
    }
  }, [techniquesByAgent]);

  useEffect(() => {
    setOptions({ ...options, series, xaxis: { categories } });
  }, [categories, series]);

  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    const { categories: mockCategories, series: mockSeries } =
      PackagesByCVEMockFactory();
    setSeries(mockSeries);
    setCategories(mockCategories);
  }

  return <Histogram options={options} />;
};

export default TechniquesByAgent;
