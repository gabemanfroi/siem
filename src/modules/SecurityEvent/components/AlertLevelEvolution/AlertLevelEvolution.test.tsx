import { cleanup, render } from '@testing-library/react';

import { AlertLevelEvolutionMockFactory } from 'modules/SecurityEvent/helpers/factories';
import AlertLevelEvolution from './index';

const mockAlertLevelEvolution = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/SecurityEvent/contexts/SecurityEventContext', () => ({
  useSecurityEvent: () => ({
    alertLevelEvolution: mockAlertLevelEvolution(),
  }),
}));

beforeEach(() => {
  mockAlertLevelEvolution.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Vulnerability/contexts/VulnerabilityContext');
});

describe('AlertLevelEvolution', () => {
  const componentRenderer = () => render(<AlertLevelEvolution />);

  it('should render the component', () => {
    const { categories, series } = AlertLevelEvolutionMockFactory();
    mockAlertLevelEvolution.mockImplementation(() => ({
      categories,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockAlertLevelEvolution.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
