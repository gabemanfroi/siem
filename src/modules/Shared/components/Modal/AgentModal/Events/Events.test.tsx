import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import { render } from '@testing-library/react';
import Events from './index';

describe('Events', () => {
  it('should render the component', () => {
    const agent = createRandomAgent();
    const { container } = render(<Events agent={agent} />);

    expect(container);
  });
});
