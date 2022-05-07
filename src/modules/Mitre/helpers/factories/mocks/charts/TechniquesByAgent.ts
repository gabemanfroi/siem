import faker from '@faker-js/faker';
import { IChartSeries } from 'modules/Shared/types/charts/Core';

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

  const exampleAffectedAgents: string[] = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAffectedAgents.push(faker.internet.url());
  }

  const series: IChartSeries[] = exampleTechniques.map((p) => ({
    name: p,
    data: exampleAffectedAgents.map(() =>
      faker.datatype.number({ min: 0, max: 100, precision: 1 })
    ),
  }));

  const categories: string[] = exampleAffectedAgents;

  return { categories, series };
};

export default TechniquesByAgentMockFactory;
