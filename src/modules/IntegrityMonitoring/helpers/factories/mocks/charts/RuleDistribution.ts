import faker from '@faker-js/faker';

const RuleDistributionMockFactory = () => {
  const exampleRules = [
    'Registry Value Integrity Checksum Changed',
    'Registry Value Entry Added to the System',
    'Integrity checksum changed.',
    'Registry Key Integrity Checksum Changed',
    'File added to the system.',
  ];

  const series = exampleRules.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { series, labels: exampleRules };
};

export default RuleDistributionMockFactory;
