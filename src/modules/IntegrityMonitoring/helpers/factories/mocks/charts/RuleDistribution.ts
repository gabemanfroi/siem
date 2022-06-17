import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const RuleDistributionMockFactory = () => {
  const exampleRules = [
    'Registry Value Integrity Checksum Changed',
    'Registry Value Entry Added to the System',
    'Integrity checksum changed.',
    'Registry Key Integrity Checksum Changed',
    'File added to the system.',
  ];

  return BasicDonutChartMockFactory(exampleRules);
};

export default RuleDistributionMockFactory;
