import faker from '@faker-js/faker';

const AlertsEvolutionByAgentsMockFactory = (agentAmount = 7) => {
  const exampleAgents = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAgents.push(faker.internet.url());
  }
  const dates: number[] = [];
  for (let i = 0; i < 15; i += 1) {
    dates.push(faker.date.soon(1).getTime());
  }

  const series = exampleAgents.map((a) => ({
    name: a,
    data: dates.map(() =>
      faker.datatype.number({ min: 0, max: 100, precision: 1 })
    ),
  }));

  return { categories: dates, series };
};
export default AlertsEvolutionByAgentsMockFactory;
