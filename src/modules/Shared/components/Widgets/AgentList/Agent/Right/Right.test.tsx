import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import Right from './index';

const mockSetIsAgentModalOpen = jest.fn(() => {});
const mockSetSelectedAgent = jest.fn(() => {});

jest.mock('modules/Shared/contexts', () => ({
  useAgent: () => ({
    setSelectedAgent: mockSetSelectedAgent(),
    setIsAgentModalOpen: mockSetIsAgentModalOpen(),
  }),
}));

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

beforeEach(() => {
  mockSetIsAgentModalOpen.mockImplementation(() => () => {});
  mockSetSelectedAgent.mockImplementation(() => () => {});
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('react-apexcharts');
});
describe('Right', () => {
  it('must render the component', () => {
    const { container } = render(<Right agent={createRandomAgent()} />);

    expect(container);
  });
  it('must be possible to open the agent modal from the list', () => {
    const agent = createRandomAgent();

    const { getByRole } = render(<Right agent={agent} />);
    const modalButton = getByRole('button');

    fireEvent.click(modalButton);

    expect(mockSetIsAgentModalOpen).toHaveBeenCalled();
    expect(mockSetSelectedAgent).toHaveBeenCalled();
  });
});
