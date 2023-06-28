import faker from '@faker-js/faker';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

const createRandomAgent = (): IAgent => ({
  id: faker.datatype.string(),
  ip: faker.internet.ip(),
  name: faker.name.firstName(),
});

export { createRandomAgent };
