import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const ActionsTypesMockFactory = () => {
  const exampleAttacks = ['added', 'deleted', 'modified'];

  return BasicDonutChartMockFactory(exampleAttacks);
};

export default ActionsTypesMockFactory;
