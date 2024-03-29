import faker from '@faker-js/faker';
import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const Top5AgentsMockFactory = (agentAmount = 7) => {
  const exampleAffectedAgents = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAffectedAgents.push(faker.internet.url());
  }

  return BasicDonutChartMockFactory(exampleAffectedAgents);
};

export default Top5AgentsMockFactory;
