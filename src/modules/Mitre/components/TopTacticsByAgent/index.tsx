import { Histogram } from 'modules/Shared/components/Charts';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { IChartSeries } from 'modules/Shared/interfaces/charts/Core';
import { useMitre } from 'modules/Mitre/contexts';

const TopTechniquesByAgent = () => {
  const { topTacticsByAgent } = useMitre();

  if (!topTacticsByAgent) return <></>;

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
    setSeries(topTacticsByAgent.series);
    setCategories(topTacticsByAgent.categories);
  }, [topTacticsByAgent]);

  useEffect(() => {
    setOptions({ ...options, series, xaxis: { categories } });
  }, [categories, series]);

  return <Histogram options={options} />;
};

export default TopTechniquesByAgent;
