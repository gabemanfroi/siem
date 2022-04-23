import { useEffect, useState } from 'react';
import { DateHistogramOptionsFactory } from 'modules/Shared/helpers/factories/chartsOptions';
import {
  CriticalityByTimeType,
  GdprByTimeType,
} from 'modules/Shared/types/HistogramTypes';

interface ChartDataSeriesInterface {
  name: string;
  data: number[];
}

interface ChartDataInterface {
  categories: string[];
  series: { [key: string]: number[] };
}

const useDateHistogram = (data: (CriticalityByTimeType | GdprByTimeType)[]) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [series, setSeries] = useState<ChartDataSeriesInterface[]>([]);

  useEffect(() => {
    const chartData: ChartDataInterface = {
      categories: [],
      series: {},
    };

    data.forEach((date) => {
      const createdDate = new Date(date.timestamp);
      chartData.categories.push(
        `${createdDate.getDate()} - ${createdDate.toLocaleString('pt-BR', {
          month: 'long',
        })}`
      );

      Object.keys(date).forEach((key: string) => {
        if (key !== 'timestamp') {
          // @ts-ignore
          Object.keys(date[key]).forEach((k) => {
            if (
              !Object.keys(chartData.series).find(
                (keyToBeFound) => keyToBeFound === k
              )
            ) {
              // @ts-ignore
              chartData.series[k] = [date[key][k]];
            } else {
              // @ts-ignore
              chartData.series[k].push(date[key][k]);
            }
          });
        }
      });
    });

    setCategories(chartData.categories);

    setSeries([
      ...Object.keys(chartData.series).map((key) => ({
        name: key,
        data: chartData.series[key],
      })),
    ]);
  }, []);

  const options = DateHistogramOptionsFactory({
    xaxis: { categories },
    series,
  });
  return { options };
};

export default useDateHistogram;
