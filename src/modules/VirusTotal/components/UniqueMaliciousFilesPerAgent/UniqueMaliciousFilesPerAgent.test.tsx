import { cleanup, render } from '@testing-library/react';
import UniqueMaliciousFilesPerAgentMockFactory from 'modules/VirusTotal/helpers/factories/mocks/charts/UniqueMaliciousFilesPerAgent';
import UniqueMaliciousFilesPerAgent from './index';

const mockUniqueMaliciousFilesPerAgent = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/VirusTotal/contexts/VirusTotalContext', () => ({
  useVirusTotal: () => ({
    uniqueMaliciousFilesPerAgent: mockUniqueMaliciousFilesPerAgent(),
  }),
}));

beforeEach(() => {
  mockUniqueMaliciousFilesPerAgent.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Vulnerability/contexts/VulnerabilityContext');
});

describe('UniqueMaliciousFilesPerAgent', () => {
  const componentRenderer = () => render(<UniqueMaliciousFilesPerAgent />);

  it('should render the component', () => {
    const { labels, series } = UniqueMaliciousFilesPerAgentMockFactory();
    mockUniqueMaliciousFilesPerAgent.mockImplementation(() => ({
      labels,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockUniqueMaliciousFilesPerAgent.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
