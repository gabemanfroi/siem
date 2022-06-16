import { render } from '@testing-library/react';
import Dashboard from './index';

describe('Dashboard', () => {
  const renderer = () => render(<Dashboard />);
  it('should render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });
});
