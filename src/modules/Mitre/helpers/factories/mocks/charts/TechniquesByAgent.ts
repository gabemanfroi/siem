import faker from '@faker-js/faker';
import { BasicHistogramMockFactory } from 'modules/Shared/helpers/factories';

const TechniquesByAgentMockFactory = (agentAmount = 7) => {
  const exampleTechniques = [
    'Initial Access',
    'Defense Evasion',
    'Persistence',
    'Privilege Escalation',
    'Lateral Movement',
    'Discovery',
    'Credential Access',
    'Impact',
    'Collection',
  ];

  const exampleAgents: string[] = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAgents.push(faker.internet.url());
  }

  return BasicHistogramMockFactory(exampleTechniques, exampleAgents);
};

export default TechniquesByAgentMockFactory;
