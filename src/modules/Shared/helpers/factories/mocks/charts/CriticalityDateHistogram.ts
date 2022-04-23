import { CriticalityByTimeType } from 'modules/Shared/types/HistogramTypes';
import faker from '@faker-js/faker';
import { CreateDateHistogramMockInterface } from 'modules/Shared/helpers/factories/mocks/types/DateHistogramMockTypes';

const createCriticityDateHistogramMock = ({
  typeOfRange,
  amountOfDays,
}: CreateDateHistogramMockInterface): CriticalityByTimeType[] => {
  const date = new Date();
  const daysAgo = new Date(date.getTime());

  const createdHistogram: CriticalityByTimeType[] = [];

  for (let i = amountOfDays; i > 0; i -= 1) {
    if (typeOfRange === 'day') daysAgo.setDate(date.getDate() - i);
    if (typeOfRange === 'week') daysAgo.setDate(date.getDate() - i * 14);
    if (typeOfRange === 'month') daysAgo.setDate(date.getDate() - i * 30);

    const createdRecord: CriticalityByTimeType = {
      timestamp: daysAgo.getTime(),
      eventsByLevel: {
        low: faker.datatype.number({ min: 200, max: 60000 }),
        medium: faker.datatype.number({ min: 200, max: 60000 }),
        high: faker.datatype.number({ min: 200, max: 60000 }),
      },
    };
    createdHistogram.push(createdRecord);
  }

  return createdHistogram;
};

export default createCriticityDateHistogramMock;
