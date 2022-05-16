import { BasicHistogramMockFactory } from 'modules/Shared/helpers/factories';

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
  return BasicHistogramMockFactory(exampleTechniques, exampleAttacks);
};

export default AttacksByTechniqueMockFactory;
