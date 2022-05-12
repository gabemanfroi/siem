import faker from '@faker-js/faker';

const ActionsTypesMockFactory = () => {
  const exampleAttacks = ['added', 'deleted', 'modified'];

  const series = exampleAttacks.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { series, labels: exampleAttacks };
};

export default ActionsTypesMockFactory;
