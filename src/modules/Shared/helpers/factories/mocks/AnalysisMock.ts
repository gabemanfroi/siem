import faker from '@faker-js/faker';

const generateRandomAnalysis = () => ({
  observable: faker.lorem.word(),
  level: faker.lorem.word(),
  namespace: faker.lorem.word(),
  predicate: faker.lorem.word(),
  value: faker.lorem.word(),
});

export default generateRandomAnalysis;
