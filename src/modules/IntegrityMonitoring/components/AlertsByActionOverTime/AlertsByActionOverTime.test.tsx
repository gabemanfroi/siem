import { cleanup, render } from '@testing-library/react';
import { AlertsByActionOverTimeMockFactory } from 'modules/IntegrityMonitoring/helpers/factories/mocks/charts';
import AlertsByActionOverTime from './index';

const mockAlertsByActionOverTime = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/IntegrityMonitoring/contexts', () => ({
  useIntegrityMonitoring: () => ({
    alertsByActionOverTime: mockAlertsByActionOverTime(),
  }),
}));

beforeEach(() => {
  mockAlertsByActionOverTime.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/IntegrityMonitoring/contexts');
});

describe('AlertsByActionOverTime', () => {
  const componentRenderer = () => render(<AlertsByActionOverTime />);
  it('should render the component', () => {
    const { categories, series } = AlertsByActionOverTimeMockFactory();
    mockAlertsByActionOverTime.mockImplementation(() => ({
      categories,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockAlertsByActionOverTime.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
