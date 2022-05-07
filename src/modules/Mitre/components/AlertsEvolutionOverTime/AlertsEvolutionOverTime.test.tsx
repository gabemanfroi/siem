import { cleanup, render } from '@testing-library/react';
import { AlertsEvolutionOverTimeMockFactory } from 'modules/Mitre/helpers/factories';
import AlertsEvolutionOverTime from './index';

const mockAlertsEvolutionOverTime = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/Mitre/contexts', () => ({
  useMitre: () => ({
    alertsEvolutionOverTime: mockAlertsEvolutionOverTime(),
  }),
}));

beforeEach(() => {
  mockAlertsEvolutionOverTime.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Mitre/contexts');
});

describe('AlertsEvolutionOverTime', () => {
  const componentRenderer = () => render(<AlertsEvolutionOverTime />);

  it('should render the component', () => {
    const { categories, series } = AlertsEvolutionOverTimeMockFactory();
    mockAlertsEvolutionOverTime.mockImplementation(() => ({
      categories,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockAlertsEvolutionOverTime.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
