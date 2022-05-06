import { Histogram } from 'modules/Shared/components/Charts';
import { AttacksByTechniqueMockFactory } from 'modules/Mitre/helpers/factories';
import { ApexOptions } from 'apexcharts';
import { useDashboard } from 'modules/Shared/contexts';
import { useEffect, useState } from 'react';

import { IChartSeries } from 'modules/Shared/types/charts/Core';

const AttacksByTechnique = () => {
  const { attacksByTechniques } = useDashboard();
  const [options, setOptions] = useState<ApexOptions>({
    title: {
      text: 'Attacks By Technique',
      style: {
        color: '#fff',
      },
    },
  });

  const [series, setSeries] = useState<IChartSeries[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (attacksByTechniques) {
      setSeries(attacksByTechniques.series);
      setCategories(attacksByTechniques.categories);
    }
  }, [attacksByTechniques]);

  useEffect(() => {
    setOptions({ ...options, series, xaxis: { categories } });
  }, [categories, series]);

  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    const { categories: mockCategories, series: mockSeries } =
      AttacksByTechniqueMockFactory();
    setSeries(mockSeries);
    setCategories(mockCategories);
  }

  return <Histogram options={options} />;
};

export default AttacksByTechnique;
