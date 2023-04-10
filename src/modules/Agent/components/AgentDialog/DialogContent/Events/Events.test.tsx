import { render } from '@testing-library/react';
import Events from 'modules/Agent/components/AgentDialog/DialogContent/Events/index';

describe('Events', () => {
  it('must render the component', () => {
    const { container } = render(<Events />);

    expect(container);
  });
});
