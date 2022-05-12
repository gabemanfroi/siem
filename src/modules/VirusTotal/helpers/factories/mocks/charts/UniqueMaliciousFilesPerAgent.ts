import faker from '@faker-js/faker';

const UniqueMaliciousFilesPerAgentMockFactory = () => {
  const exampleAgents = [
    'ip-10-0-0-180.us-west-1.compute.internal',
    'Centos',
    'Windows',
    'Ubuntu',
    'Amazon',
  ];

  const series = exampleAgents.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { series, labels: exampleAgents };
};

export default UniqueMaliciousFilesPerAgentMockFactory;
