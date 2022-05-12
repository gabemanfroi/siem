import { cleanup, render } from '@testing-library/react';
import { Top5AgentsMockFactory } from 'modules/IntegrityMonitoring/helpers/factories/mocks/charts';
import Top5Agents from './index';

const mockTop5Agents = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/IntegrityMonitoring/contexts', () => ({
  useIntegrityMonitoring: () => ({
    top5Agents: mockTop5Agents(),
  }),
}));

beforeEach(() => {
  mockTop5Agents.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/IntegrityMonitoring/contexts');
});

describe('Top5Agents', () => {
  const componentRenderer = () => render(<Top5Agents />);
  it('should render the component', () => {
    const { labels, series } = Top5AgentsMockFactory();
    mockTop5Agents.mockImplementation(() => ({ labels, series }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockTop5Agents.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
