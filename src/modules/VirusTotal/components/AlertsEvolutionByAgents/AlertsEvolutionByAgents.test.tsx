import { cleanup, render } from '@testing-library/react';
import AlertsEvolutionByAgentsMockFactory from 'modules/VirusTotal/helpers/factories/mocks/charts/AlertsEvolutionByAgents';
import AlertsEvolutionByAgents from './index';

const mockAlertsEvolutionByAgents = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/VirusTotal/contexts/VirusTotalContext', () => ({
  useVirusTotal: () => ({
    alertsEvolutionByAgents: mockAlertsEvolutionByAgents(),
  }),
}));

beforeEach(() => {
  mockAlertsEvolutionByAgents.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Vulnerability/contexts/VulnerabilityContext');
});

describe('AlertsEvolutionByAgents', () => {
  const componentRenderer = () => render(<AlertsEvolutionByAgents />);

  it('should render the component', () => {
    const { categories, series } = AlertsEvolutionByAgentsMockFactory();
    mockAlertsEvolutionByAgents.mockImplementation(() => ({
      categories,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockAlertsEvolutionByAgents.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
