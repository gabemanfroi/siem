import { render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import Agent from '.';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('Agent', () => {
  it('must render the component', () => {
    const { container } = render(<Agent agent={createRandomAgent()} />);

    expect(container);
  });
});
