import { CreateDateHistogramMockInterface } from 'modules/Shared/helpers/factories/mocks/types/DateHistogramMockTypes';
import { GdprByTimeType } from 'modules/Shared/types/HistogramTypes';
import faker from '@faker-js/faker';

const createGdprDateHistogramMock = ({
  typeOfRange,
  amountOfDays,
}: CreateDateHistogramMockInterface): GdprByTimeType[] => {
  const fakeArticles = ['IV.4.d', 'VI.3.a', 'I.1.a', '2.5'];
  const date = new Date();
  const daysAgo = new Date(date.getTime());

  const createdHistogram: GdprByTimeType[] = [];

  for (let i = amountOfDays; i > 0; i -= 1) {
    if (typeOfRange === 'day') daysAgo.setDate(date.getDate() - i);
    if (typeOfRange === 'week') daysAgo.setDate(date.getDate() - i * 14);
    if (typeOfRange === 'month') daysAgo.setDate(date.getDate() - i * 30);

    const createdRecord: GdprByTimeType = {
      timestamp: daysAgo.getTime(),
      eventsByGdpr: {},
    };

    fakeArticles.forEach((article) => {
      createdRecord.eventsByGdpr[article] = faker.datatype.number({
        min: 200,
        max: 60000,
      });
    });
    createdHistogram.push(createdRecord);
  }

  return createdHistogram;
};

export default createGdprDateHistogramMock;
