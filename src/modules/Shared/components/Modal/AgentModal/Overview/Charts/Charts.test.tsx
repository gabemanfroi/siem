import { render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import Charts from './index';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('Charts', () => {
  const agent = createRandomAgent();
  it('must render the component', () => {
    const { container } = render(<Charts agent={agent} />);

    expect(container).not.toBeNull();
  });
});
