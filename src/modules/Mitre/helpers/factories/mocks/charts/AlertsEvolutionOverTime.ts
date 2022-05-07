import faker from '@faker-js/faker';

const AlertsEvolutionOverTimeMockFactory = () => {
  const exampleAttacks = [
    'Valid Accounts',
    'Sudo',
    'Network Sniffing',
    'Stored Data Manipulation',
    'Brute Force',
  ];

  const dates: number[] = [];
  for (let i = 0; i < 15; i += 1) {
    dates.push(faker.date.soon(1).getTime());
  }

  const series = exampleAttacks.map((a) => ({
    name: a,
    data: dates.map(() =>
      faker.datatype.number({ min: 0, max: 100, precision: 1 })
    ),
  }));

  return { categories: dates, series };
};

export default AlertsEvolutionOverTimeMockFactory;
