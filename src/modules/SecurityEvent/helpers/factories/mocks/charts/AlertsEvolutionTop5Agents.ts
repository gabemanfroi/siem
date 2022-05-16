import faker from '@faker-js/faker';
import { BasicHistogramMockFactory } from 'modules/Shared/helpers/factories';

const AlertsEvolutionTop5AgentsMockFactory = () => {
  const exampleAgents: string[] = [];

  for (let i = 0; i < 5; i += 1) {
    exampleAgents.push(faker.internet.url());
  }

  const dates: number[] = [];
  for (let i = 0; i < 15; i += 1) {
    dates.push(faker.date.soon(1).getTime());
  }

  return BasicHistogramMockFactory(exampleAgents, dates);
};

export default AlertsEvolutionTop5AgentsMockFactory;
