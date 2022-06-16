import { cleanup, render } from '@testing-library/react';
import LastScannedFilesMockFactory from 'modules/VirusTotal/helpers/factories/mocks/charts/LastScannedFiles';
import LastScannedFiles from './index';

const mockLastScannedFiles = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/VirusTotal/contexts/VirusTotalContext', () => ({
  useVirusTotal: () => ({
    lastScannedFiles: mockLastScannedFiles(),
  }),
}));

beforeEach(() => {
  mockLastScannedFiles.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Vulnerability/contexts/VulnerabilityContext');
});

describe('LastScannedFiles', () => {
  const componentRenderer = () => render(<LastScannedFiles />);

  it('should render the component', () => {
    const { labels, series } = LastScannedFilesMockFactory();
    mockLastScannedFiles.mockImplementation(() => ({
      labels,
      series,
    }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockLastScannedFiles.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
