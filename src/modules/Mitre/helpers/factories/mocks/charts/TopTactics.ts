import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

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

  return BasicDonutChartMockFactory(exampleTechniques);
};

export default TopTacticsMockFactory;
