import faker from '@faker-js/faker';

const generateRandomEvent = () => ({
  rule: {
    level: faker.random.number({ min: 1, max: 10 }),
    firedTimes: faker.random.number({ min: 1, max: 50 }),
    description: faker.lorem.sentence(),
  },
  win: {
    message: faker.lorem.sentence(),
    processId: faker.random.number({ min: 1, max: 1000 }),
    task: faker.random.number({ min: 1, max: 500 }),
    targetDomainName: faker.internet.domainName(),
    ipPort: faker.random.number({ min: 1, max: 8000 }),
  },
  id: faker.random.uuid(),
  agent: {
    name: faker.internet.userName(),
    ip: faker.internet.ip(),
  },
});

export default generateRandomEvent;
