import { cleanup, render } from '@testing-library/react';
import { ActionsTypesMockFactory } from 'modules/IntegrityMonitoring/helpers/factories/mocks/charts';
import ActionsTypes from './index';

const mockActionsTypes = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock(
  'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext',
  () => ({
    useIntegrityMonitoring: () => ({
      actionsTypes: mockActionsTypes(),
    }),
  })
);

beforeEach(() => {
  mockActionsTypes.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock(
    'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext'
  );
});

describe('ActionsTypes', () => {
  const componentRenderer = () => render(<ActionsTypes />);
  it('should render the component', () => {
    const { labels, series } = ActionsTypesMockFactory();
    mockActionsTypes.mockImplementation(() => ({ labels, series }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockActionsTypes.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
