import faker from '@faker-js/faker';
import { IChartSeries } from 'modules/Shared/interfaces/charts/IChartSeries';

const BasicHistogramMockFactory = (
  exampleCategories: string[],
  exampleData: string[] | number[]
) => {
  const series: IChartSeries[] = exampleCategories.map((a) => ({
    name: a,
    data: exampleData.map(() =>
      faker.datatype.number({ min: 0, max: 100, precision: 1 })
    ),
  }));

  return { categories: exampleCategories, series };
};

export default BasicHistogramMockFactory;
