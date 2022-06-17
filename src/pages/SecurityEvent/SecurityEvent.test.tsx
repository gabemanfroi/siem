import { render } from '@testing-library/react';
import SecurityEvent from './index';

describe('SecurityEvent', () => {
  const renderer = () => render(<SecurityEvent />);
  it('should render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });
});
