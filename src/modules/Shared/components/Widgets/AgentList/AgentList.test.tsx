import { cleanup, render } from '@testing-library/react';
import AgentList from '.';

const mockIsLoading = jest.fn();
const mockGroupedByAgent = jest.fn();
const mockSetSelectedAgent = jest.fn();
const mockSetIsAgentModalOpen = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useDashboard: () => ({
    groupedByAgent: mockGroupedByAgent(),
  }),
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
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
  mockGroupedByAgent.mockImplementation(() => []);
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
});

describe('AgentList', () => {
  it('must render the component', () => {
    const { container } = render(<AgentList />);
    expect(container);
  });
});
