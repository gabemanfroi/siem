import { render } from '@testing-library/react';
import AgentList from './index';

describe('AgentList', () => {
  const renderer = () => render(<AgentList />);
  it('must render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });
});
