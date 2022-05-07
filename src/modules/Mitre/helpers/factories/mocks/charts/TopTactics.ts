import faker from '@faker-js/faker';

const TopTacticsMockFactory = () => {
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

  const series = exampleTechniques.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { labels: exampleTechniques, series };
};

export default TopTacticsMockFactory;
