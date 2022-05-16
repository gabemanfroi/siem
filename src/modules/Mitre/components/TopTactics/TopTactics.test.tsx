import { cleanup, render } from '@testing-library/react';
import { TopTacticsMockFactory } from 'modules/Mitre/helpers/factories';
import TopTactics from './index';

const mockTopTactics = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/Mitre/contexts', () => ({
  useMitre: () => ({
    topTactics: mockTopTactics(),
  }),
}));

beforeEach(() => {
  mockTopTactics.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Mitre/contexts');
});

describe('TopTactics', () => {
  const componentRenderer = () => render(<TopTactics />);
  it('should render the component', () => {
    const { labels, series } = TopTacticsMockFactory();
    mockTopTactics.mockImplementation(() => ({ labels, series }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockTopTactics.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
