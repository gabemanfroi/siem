import { cleanup, render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import Overview from './index';

const mockSelectedAgent = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useAgent: () => ({
    selectedAgent: mockSelectedAgent(),
  }),
}));

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

beforeEach(() => {
  mockSelectedAgent.mockImplementation(() => null);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
  jest.unmock('react-apexcharts');
});

describe('Overview', () => {
  it('must render the component', () => {
    const { container } = render(<Overview />);
    expect(container);
  });
  it('must render an empty div if there is no selected agent', () => {
    mockSelectedAgent.mockImplementation(() => null);

    const { container } = render(<Overview />);

    expect(container).toBeEmptyDOMElement();
  });
  it('must render the whole content of the component if there is a selected agent', () => {
    mockSelectedAgent.mockImplementation(() => createRandomAgent());
    const { container } = render(<Overview />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
