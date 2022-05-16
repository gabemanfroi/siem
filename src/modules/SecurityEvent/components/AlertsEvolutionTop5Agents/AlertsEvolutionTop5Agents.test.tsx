import { cleanup, render } from '@testing-library/react';

import { AlertsEvolutionTop5AgentsMockFactory } from 'modules/SecurityEvent/helpers/factories';
import AlertsEvolutionTop5Agents from './index';

const mockAlertsEvolutionTop5Agents = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/SecurityEvent/contexts/SecurityEventContext', () => ({
  useSecurityEvent: () => ({
    alertsEvolutionTop5Agents: mockAlertsEvolutionTop5Agents(),
  }),
}));

beforeEach(() => {
  mockAlertsEvolutionTop5Agents.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Vulnerability/contexts/VulnerabilityContext');
});

describe('AlertsEvolutionTop5Agents', () => {
  const componentRenderer = () => render(<AlertsEvolutionTop5Agents />);

  it('should render the component', () => {
    const { categories, series } = AlertsEvolutionTop5AgentsMockFactory();
    mockAlertsEvolutionTop5Agents.mockImplementation(() => ({
      categories,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockAlertsEvolutionTop5Agents.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
