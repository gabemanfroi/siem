import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import AgentItem from './index';

const agent = createRandomAgent();

const mockSetIsAgentModalOpen = jest.fn(() => {});
const mockSetSelectedAgent = jest.fn(() => {});

jest.mock('modules/Shared/contexts', () => ({
  useAgent: () => ({
    setSelectedAgent: mockSetSelectedAgent(),
    setIsAgentModalOpen: mockSetIsAgentModalOpen(),
  }),
}));

beforeEach(() => {
  mockSetIsAgentModalOpen.mockImplementation(() => () => {});
  mockSetSelectedAgent.mockImplementation(() => () => {});
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
});

describe('AgentItem', () => {
  const renderer = () => render(<AgentItem agent={agent} />);

  it('must render the component', () => {
    const { container } = renderer();
    expect(container.children.length).toBeGreaterThan(0);
  });
  it('must open the modal when ellipsis is clicked', () => {
    const { getByRole } = renderer();
    const button = getByRole('button');
    fireEvent.click(button);

    expect(mockSetIsAgentModalOpen).toHaveBeenCalled();
    expect(mockSetSelectedAgent).toHaveBeenCalled();
  });
});
