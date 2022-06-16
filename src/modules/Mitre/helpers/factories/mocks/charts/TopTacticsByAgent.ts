import faker from '@faker-js/faker';
import { BasicHistogramMockFactory } from '../../../../../Shared/helpers/factories';

const TopTacticsByAgentMockFactory = (agentAmount = 7) => {
  const exampleTechniques = [
    'Initial Access',
    'Defense Evasion',
    'Persistence',
    'Privilege Escalation',
    'Lateral Movement',
  ];

  const exampleAgents: string[] = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAgents.push(faker.internet.url());
  }

  return BasicHistogramMockFactory(exampleTechniques, exampleAgents);
};

export default TopTacticsByAgentMockFactory;
