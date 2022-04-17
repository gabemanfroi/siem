import { cleanup, render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/tests/factories/AgentFactory';
import AgentModal from './index';

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
    const { queryByRole } = render(<AgentModal />);

    expect(queryByRole('presentation')).toBeNull();
  });

  it('must not render anything if isAgentModalOpen is false', () => {
    mockSelectedAgent.mockImplementation(() => createRandomAgent());
    mockIsAgentModalOpen.mockImplementation(() => false);

    const { queryByRole } = render(<AgentModal />);

    expect(queryByRole('presentation')).toBeNull();
  });

  it('must not render anything if it does not have any selectedAgent is false', () => {
    mockSelectedAgent.mockImplementation(() => null);

    mockIsAgentModalOpen.mockImplementation(() => true);

    const { queryByRole } = render(<AgentModal />);

    expect(queryByRole('presentation')).toBeNull();
  });

  it('must render if isAgentModalOpen is true and if if it has a selectedAgent', () => {
    mockSelectedAgent.mockImplementation(() => createRandomAgent());
    mockIsAgentModalOpen.mockImplementation(() => true);

    const { getByRole } = render(<AgentModal />);

    getByRole('presentation');
  });
});
