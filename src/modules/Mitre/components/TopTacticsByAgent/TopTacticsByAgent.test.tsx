import { cleanup, render } from '@testing-library/react';
import { TopTacticsByAgentMockFactory } from 'modules/Mitre/helpers/factories';
import TopTacticsByAgent from './index';

const mockTopTacticsByAgent = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useMitre: () => ({
    topTacticsByAgent: mockTopTacticsByAgent(),
  }),
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));

beforeEach(() => {
  mockTopTacticsByAgent.mockImplementation(() => ({}));
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => jest.unmock('modules/Shared/contexts'));

describe('TopTacticsByAgent', () => {
  const componentRenderer = () => render(<TopTacticsByAgent />);

  it('should render the component', () => {
    const { categories, series } = TopTacticsByAgentMockFactory();
    mockTopTacticsByAgent.mockImplementation(() => ({ categories, series }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockTopTacticsByAgent.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
