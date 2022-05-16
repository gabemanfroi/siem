import faker from '@faker-js/faker';
import BasicHistogram from 'modules/Shared/helpers/factories/mocks/charts/BasicHistogram';

const AlertsEvolutionByAgentsMockFactory = (agentAmount = 7) => {
  const exampleAgents = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAgents.push(faker.internet.url());
  }
  const dates: string[] = [];
  for (let i = 0; i < 15; i += 1) {
    dates.push(String(faker.date.soon(1).getTime()));
  }

  return BasicHistogram(dates, exampleAgents);
};
export default AlertsEvolutionByAgentsMockFactory;
