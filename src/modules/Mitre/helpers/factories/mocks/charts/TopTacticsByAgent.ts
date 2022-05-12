import faker from '@faker-js/faker';
import { IChartSeries } from 'modules/Shared/interfaces/charts/IChartSeries';

const TopTacticsByAgentMockFactory = (agentAmount = 7) => {
  const exampleTechniques = [
    'Initial Access',
    'Defense Evasion',
    'Persistence',
    'Privilege Escalation',
    'Lateral Movement',
  ];

  const exampleAffectedAgents: string[] = [];

  for (let i = 0; i < agentAmount; i += 1) {
    exampleAffectedAgents.push(faker.internet.url());
  }

  const series: IChartSeries[] = exampleAffectedAgents.map((p) => ({
    name: p,
    data: exampleTechniques.map(() =>
      faker.datatype.number({ min: 0, max: 100, precision: 1 })
    ),
  }));

  const categories: string[] = exampleTechniques;

  return { categories, series };
};

export default TopTacticsByAgentMockFactory;
