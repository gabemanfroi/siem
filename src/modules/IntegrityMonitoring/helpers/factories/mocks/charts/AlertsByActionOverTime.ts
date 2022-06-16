import faker from '@faker-js/faker';
import { BasicHistogramMockFactory } from 'modules/Shared/helpers/factories';

const AlertsByActionOverTimeMockFactory = () => {
  const exampleAttacks = ['added', 'deleted', 'modified'];

  const dates: string[] = [];
  for (let i = 0; i < 15; i += 1) {
    dates.push(String(faker.date.soon(1).getTime()));
  }

  return BasicHistogramMockFactory(dates, exampleAttacks);
};

export default AlertsByActionOverTimeMockFactory;
