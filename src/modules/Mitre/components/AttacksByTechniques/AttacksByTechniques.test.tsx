import { cleanup, render } from '@testing-library/react';
import { AttacksByTechniqueMockFactory } from 'modules/Mitre/helpers/factories';
import AttacksByTechniques from './index';

const mockAttacksByTechniques = jest.fn();
const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));
jest.mock('modules/Mitre/contexts', () => ({
  useMitre: () => ({
    attacksByTechnique: mockAttacksByTechniques(),
  }),
}));

beforeEach(() => {
  mockAttacksByTechniques.mockImplementation(() => {});
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('modules/Mitre/contexts');
});

describe('AttacksByTechniques', () => {
  const componentRenderer = () => render(<AttacksByTechniques />);

  it('should render the component', () => {
    const { series, categories } = AttacksByTechniqueMockFactory();
    mockAttacksByTechniques.mockImplementation(() => ({ series, categories }));
    const { container } = componentRenderer();
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render and empty div in case of no data', () => {
    mockAttacksByTechniques.mockImplementation(() => undefined);
    const { container } = componentRenderer();

    expect(container.children.length).toBe(0);
  });
});
