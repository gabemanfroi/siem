import { cleanup, render } from '@testing-library/react';
import { TopMitreMockFactory } from 'modules/SecurityEvent/helpers/factories/mocks/charts';
import TopMitre from './index';

const mockTopMitre = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/SecurityEvent/contexts/SecurityEventContext', () => ({
  useSecurityEvent: () => ({
    topMitre: mockTopMitre(),
  }),
}));

beforeEach(() => {
  mockTopMitre.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/SecurityEvent/contexts/SecurityEventContext');
});

describe('TopMitre', () => {
  const componentRenderer = () => render(<TopMitre />);
  it('should render the component', () => {
    const { labels, series } = TopMitreMockFactory();
    mockTopMitre.mockImplementation(() => ({ labels, series }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockTopMitre.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
