import { AlertWithReports, IEvent } from 'modules/Shared/interfaces';
import faker from '@faker-js/faker';
import {
  generateEvent,
  generateRandomReport,
} from 'modules/Shared/helpers/factories/mocks';

export const generateRandomAlertWithReports = (): AlertWithReports => {
  const event: IEvent = generateEvent();

  const reports = [...Array(faker.random.number({ min: 1, max: 10 }))].map(
    generateRandomReport
  );

  return {
    event,
    reports,
    id: faker.random.uuid(),
  };
};
