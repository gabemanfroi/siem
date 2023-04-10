import faker from '@faker-js/faker';
import { Agent } from 'modules/Shared/interfaces';

const mockDeviceType = ['server', 'desktop', 'laptop', 'mobile'];

const createRandomGeneralData = () => ({
  id: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
  ip: faker.internet.ip(),
  elasticsearchName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  name: faker.name.firstName(),
  deviceType: mockDeviceType[
    faker.datatype.number({ min: 0, max: 3, precision: 1 })
  ] as 'SERVER' | 'DESKTOP' | 'LAPTOP' | 'MOBILE',
});

const createRandomAgent = (): Agent => ({
  generalData: createRandomGeneralData(),
});

export { createRandomAgent };
