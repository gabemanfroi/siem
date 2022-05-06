import faker from '@faker-js/faker';
import { IChartSeries } from 'modules/Shared/types/charts/Core';

const AttacksByTechniqueMockFactory = () => {
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

  const exampleAttacks = [
    'Valid Accounts',
    'Sudo',
    'Network Sniffing',
    'Stored Data Manipulation',
    'Brute Force',
  ];

  const series: IChartSeries[] = exampleAttacks.map((a) => ({
    name: a,
    data: exampleTechniques.map(() =>
      faker.datatype.number({ min: 0, max: 100, precision: 1 })
    ),
  }));

  const categories: string[] = exampleTechniques;

  return { categories, series };
};

export default AttacksByTechniqueMockFactory;
