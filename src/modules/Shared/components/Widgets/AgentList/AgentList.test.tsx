import { cleanup, render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import AgentList from '.';

const mockIsLoading = jest.fn();
const mockGroupedByAgent = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/Shared/contexts', () => ({
  useDashboard: () => ({
    groupedByAgent: mockGroupedByAgent(),
  }),
}));

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

beforeEach(() => {
  mockIsLoading.mockImplementation(() => true);
  mockGroupedByAgent.mockImplementation(() => []);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Shared/contexts');
});

describe('AgentList', () => {
  it('must render the component', () => {
    const { container } = render(<AgentList />);

    expect(container).toBeInTheDocument();
  });
  it('must render Skeleton if in Loading State', () => {
    const { getByTestId } = render(<AgentList />);
    expect(getByTestId('AgentListSkeleton')).toBeInTheDocument();
  });

  it('must not render Skeleton if not in Loading State', () => {
    mockIsLoading.mockImplementation(() => false);
    const { queryAllByTestId } = render(<AgentList />);

    expect(queryAllByTestId('AgentListSkeleton').length).toBe(0);
  });

  it('must not render Agent if in Loading State', () => {
    mockGroupedByAgent.mockImplementation(() => [
      createRandomAgent(),
      createRandomAgent(),
    ]);
    mockIsLoading.mockImplementation(() => true);

    const { container } = render(<AgentList />);

    expect(container.getElementsByClassName('MuiGrid-root').length).toBe(0);
  });

  it('must render Agent if not in Loading State', () => {
    mockIsLoading.mockImplementation(() => false);
    mockGroupedByAgent.mockImplementation(() => [
      createRandomAgent(),
      createRandomAgent(),
    ]);

    const { container } = render(<AgentList />);

    expect(container.getElementsByClassName('MuiGrid-root').length).toBe(2);
  });
});
