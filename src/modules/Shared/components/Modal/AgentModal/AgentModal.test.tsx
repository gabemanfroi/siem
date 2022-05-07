import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import AgentModal from './index';

const mockIsAgentModalOpen = jest.fn();
const mockSelectedAgent = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
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
  jest.unmock('modules/Shared/contexts');
  jest.unmock('react-apexcharts');
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

    expect(getByRole('presentation'));
  });
  it('must initialize withing the General Data tab', () => {
    mockSelectedAgent.mockImplementation(() => createRandomAgent());
    mockIsAgentModalOpen.mockImplementation(() => true);

    const { getByText } = render(<AgentModal />);

    expect(getByText('Informações Gerais')).toHaveClass('Mui-selected');
  });
  it('must be possible to change tabs', () => {
    mockSelectedAgent.mockImplementation(() => createRandomAgent());
    mockIsAgentModalOpen.mockImplementation(() => true);

    const { getByText } = render(<AgentModal />);
    const eventsTab = getByText('Eventos');

    fireEvent.click(eventsTab);
    expect(getByText('Eventos')).toHaveClass('Mui-selected');
  });
});
