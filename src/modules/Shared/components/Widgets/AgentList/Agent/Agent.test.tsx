import { render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/tests/factories/AgentFactory';
import Agent from './index';

describe('Agent', () => {
  it('must render the component', () => {
    const { container } = render(<Agent agent={createRandomAgent()} />);

    expect(container).not.toBeNull();
  });
});
