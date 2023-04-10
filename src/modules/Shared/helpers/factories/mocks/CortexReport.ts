import faker from '@faker-js/faker';

export const generateRandomReport = () => ({
  jobId: faker.random.uuid(),
  analyzerId: faker.random.uuid(),
  observable: faker.internet.domainName(),
  report: {
    summary: {
      level: faker.random.arrayElement(['suspicious', 'info']),
      namespace: faker.random.word(),
      predicate: faker.random.word(),
      value: faker.random.words(),
    },
  },
});
