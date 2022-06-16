import faker from '@faker-js/faker';
import { AgentType } from 'modules/Shared/types';

const createRandomGeneralData = () => ({
  id: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
  ip: faker.internet.ip(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  alias: '',
});

const createRandomEventsByLevel = () => ({
  low: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
  medium: faker.datatype.number({
    min: 1,
    max: 999999,
    precision: 1,
  }),
  high: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
});

const createRandomAgent = (): AgentType => ({
  generalData: createRandomGeneralData(),
  eventsByLevel: createRandomEventsByLevel(),
  trustLevel: faker.datatype.number({ min: 0, max: 100, precision: 2 }),
  events: []
});

export { createRandomAgent };
