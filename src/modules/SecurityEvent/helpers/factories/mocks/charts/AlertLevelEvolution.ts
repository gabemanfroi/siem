import faker from '@faker-js/faker';
import { BasicHistogramMockFactory } from 'modules/Shared/helpers/factories';

const AlertLevelEvolutionMockFactory = () => {
  const levels = [...Array(12).keys()];

  const dates: string[] = [];
  for (let i = 0; i < 15; i += 1) {
    dates.push(String(faker.date.soon(1).getTime()));
  }
  return BasicHistogramMockFactory(dates, levels);
};

export default AlertLevelEvolutionMockFactory;
