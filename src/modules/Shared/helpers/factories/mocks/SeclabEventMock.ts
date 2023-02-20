import faker from '@faker-js/faker';
import generateRandomEvent from 'modules/Shared/helpers/factories/mocks/EventMock';
import generateRandomAnalysis from 'modules/Shared/helpers/factories/mocks/AnalysisMock';

export const generateRandomSeclabEvent = () => ({
  event: generateRandomEvent(),
  analysis: generateRandomAnalysis(),
  id: faker.random.uuid(),
});
