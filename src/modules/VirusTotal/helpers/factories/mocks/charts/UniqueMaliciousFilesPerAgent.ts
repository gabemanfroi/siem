import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const UniqueMaliciousFilesPerAgentMockFactory = () => {
  const exampleAgents = [
    'ip-10-0-0-180.us-west-1.compute.internal',
    'Centos',
    'Windows',
    'Ubuntu',
    'Amazon',
  ];

  return BasicDonutChartMockFactory(exampleAgents);
};

export default UniqueMaliciousFilesPerAgentMockFactory;
