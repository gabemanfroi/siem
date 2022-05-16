import faker from '@faker-js/faker';
import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const Top5AgentsMockFactory = () => {
  const exampleAgents: string[] = [];

  for (let i = 0; i < 5; i += 1) {
    exampleAgents.push(faker.internet.url());
  }

  return BasicDonutChartMockFactory(exampleAgents);
};

export default Top5AgentsMockFactory;
