import faker from '@faker-js/faker';

const BasicDonutChartMockFactory = (exampleData: string[]) => {
  const series = exampleData.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { labels: exampleData, series };
};

export default BasicDonutChartMockFactory;
