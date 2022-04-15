import { cleanup, render } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import AgentModal from './index';
import { useAgent } from '../../../contexts/AgentContext';
import { AgentType } from '../../../types';

const mockIsAgentModalOpen = jest.fn();
const mockSelectedAgent = jest.fn();

jest.mock('modules/Shared/contexts/AgentContext', () => ({
  useAgent: () => ({
    selectedAgent: mockSelectedAgent(),
    isAgentModalOpen: mockIsAgentModalOpen(),
  }),
}));

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

beforeEach(() => {
  mockIsAgentModalOpen.mockImplementation(() => false);
  mockSelectedAgent.mockImplementation(() => null);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts/AgentContext');
});

describe('AgentModal', () => {
  it('must not render anything initially', () => {
    console.log(useAgent());

    const { queryByRole } = render(<AgentModal />);

    expect(queryByRole('presentation')).toBeNull();
  });

  it('must render if isAgentModalOpen is true', () => {
    mockSelectedAgent.mockImplementation(
      () =>
        ({
          generalData: {
            id: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
            ip: '192.168.1.254',
            name: 'Test Agent',
            alias: '',
          },
          eventsByLevel: {
            low: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
            medium: faker.datatype.number({
              min: 1,
              max: 999999,
              precision: 1,
            }),
            high: faker.datatype.number({ min: 1, max: 999999, precision: 1 }),
          },
          trustLevel: 50,
        } as AgentType)
    );
    mockIsAgentModalOpen.mockImplementation(() => true);

    const { getByRole } = render(<AgentModal />);

    getByRole('presentation');
  });
});
