import { Histogram } from 'modules/Shared/components/Charts';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { useDashboard } from 'modules/Shared/contexts';
import { IChartSeries } from 'modules/Shared/types/charts/Core';

const TopTechniquesByAgent = () => {
  const { topTacticsByAgent } = useDashboard();
  const [options, setOptions] = useState<ApexOptions>({
    title: {
      text: 'Top Techniques By Agent',
      style: {
        color: '#fff',
      },
    },
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<IChartSeries[]>([]);

  useEffect(() => {
    if (topTacticsByAgent) {
      setSeries(topTacticsByAgent.series);
      setCategories(topTacticsByAgent.categories);
    }
  }, [topTacticsByAgent]);

  useEffect(() => {
    setOptions({ ...options, series, xaxis: { categories } });
  }, [categories, series]);

  return <Histogram options={options} />;
};

export default TopTechniquesByAgent;
