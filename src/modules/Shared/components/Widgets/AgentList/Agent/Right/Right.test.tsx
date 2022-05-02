import { render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import Right from './index';

describe('Right', () => {
  it('should render the component', () => {
    const { container } = render(<Right agent={createRandomAgent()} />);

    expect(container);
  });
});
