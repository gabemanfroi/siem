import { cleanup, render } from '@testing-library/react';
import { TechniquesByAgentMockFactory } from 'modules/Mitre/helpers/factories';
import TechniquesByAgent from './index';

const mockTechniquesByAgent = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock('modules/Shared/contexts', () => ({
  useMitre: () => ({
    techniquesByAgent: mockTechniquesByAgent(),
  }),
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));

beforeEach(() => {
  mockTechniquesByAgent.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('react-apexcharts');
});

describe('TechniquesByAgent', () => {
  const componentRenderer = () => render(<TechniquesByAgent />);

  it('should render the component', () => {
    const { categories, series } = TechniquesByAgentMockFactory();

    mockTechniquesByAgent.mockImplementation(() => ({ categories, series }));
    const { container } = componentRenderer();

    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockTechniquesByAgent.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
