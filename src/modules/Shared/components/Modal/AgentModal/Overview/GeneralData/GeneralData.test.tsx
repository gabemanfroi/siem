import { render } from '@testing-library/react';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import GeneralData from './index';

describe('GeneralData', () => {
  it('must render the component', () => {
    const agent = createRandomAgent();
    const { container } = render(
      <GeneralData agent={agent} agentState={agent} setAgentState={() => {}} />
    );

    expect(container).not.toBeNull();
  });
});
