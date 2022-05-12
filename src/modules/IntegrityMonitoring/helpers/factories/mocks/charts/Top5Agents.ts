import faker from '@faker-js/faker';

const Top5AgentsMockFactory = (agentAmount = 7) => {
  const exampleAffectedAgents = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAffectedAgents.push(faker.internet.url());
  }

  const series = exampleAffectedAgents.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { series, labels: exampleAffectedAgents };
};

export default Top5AgentsMockFactory;
