import { useEffect, useState } from 'react';
import { DonutChart } from 'modules/Shared/components/Charts';
import { ApexOptions } from 'apexcharts';
import { useDashboard } from 'modules/Shared/contexts';

const TopTactics = () => {
  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [options, setOptions] = useState<ApexOptions>({});
  const { topTactics } = useDashboard();

  useEffect(() => {
    if (topTactics) {
      setSeries(topTactics.series);
      setLabels(topTactics.labels);
    }
  }, [topTactics]);

  useEffect(() => {
    setOptions({ ...options, series, labels, title: { text: 'Top Tactics' } });
  }, [series]);

  return <DonutChart options={options} />;
};

export default TopTactics;
