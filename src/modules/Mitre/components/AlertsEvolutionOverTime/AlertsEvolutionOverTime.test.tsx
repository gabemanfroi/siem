import { cleanup, render } from '@testing-library/react';
import AlertsEvolutionOverTime from './index';
import { AlertsEvolutionOverTimeMockFactory } from '../../helpers/factories';

const mockAlertsEvolutionOverTime = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useMitre: () => ({
    alertsEvolutionOverTime: mockAlertsEvolutionOverTime(),
  }),
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));

beforeEach(() => {
  mockAlertsEvolutionOverTime.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => jest.unmock('modules/Shared/contexts'));

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
