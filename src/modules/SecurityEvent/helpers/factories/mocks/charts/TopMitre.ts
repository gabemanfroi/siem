import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const TopMitreMockFactory = () => {
  const exampleAttacks = [
    'Valid Accounts',
    'Sudo',
    'Network Sniffing',
    'Stored Data Manipulation',
    'Brute Force',
  ];

  return BasicDonutChartMockFactory(exampleAttacks);
};

export default TopMitreMockFactory;
