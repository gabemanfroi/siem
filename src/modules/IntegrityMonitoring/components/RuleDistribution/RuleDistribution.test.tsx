import { cleanup, render } from '@testing-library/react';
import { RuleDistributionMockFactory } from 'modules/IntegrityMonitoring/helpers/factories/mocks/charts';
import RuleDistribution from './index';

const mockRuleDistribution = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/IntegrityMonitoring/contexts', () => ({
  useIntegrityMonitoring: () => ({
    ruleDistribution: mockRuleDistribution(),
  }),
}));

beforeEach(() => {
  mockRuleDistribution.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/IntegrityMonitoring/contexts');
});

describe('RuleDistribution', () => {
  const componentRenderer = () => render(<RuleDistribution />);
  it('should render the component', () => {
    const { labels, series } = RuleDistributionMockFactory();
    mockRuleDistribution.mockImplementation(() => ({ labels, series }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockRuleDistribution.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
