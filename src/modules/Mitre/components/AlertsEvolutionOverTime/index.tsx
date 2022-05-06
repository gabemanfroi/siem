import { Histogram } from 'modules/Shared/components/Charts';
import { useDashboard } from 'modules/Shared/contexts';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { IChartSeries } from 'modules/Shared/types/charts/Core';

const AlertsEvolutionOverTime = () => {
  const { alertsEvolutionOverTime } = useDashboard();
  const [options, setOptions] = useState<ApexOptions>({
    xaxis: {
      type: 'datetime',
    },
    title: {
      text: 'Alerts Evolution Over Time',
    },
  });
  const [series, setSeries] = useState<IChartSeries[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (alertsEvolutionOverTime) {
      setSeries(alertsEvolutionOverTime.series);
      setCategories(alertsEvolutionOverTime.categories);
    }
  }, [alertsEvolutionOverTime]);

  useEffect(() => {
    setOptions({ ...options, series, xaxis: { categories } });
  }, [categories, series]);

  return <Histogram options={options} />;
};

export default AlertsEvolutionOverTime;
