import { render } from '@testing-library/react';
import Mitre from './index';

describe('Mitre', () => {
  const renderer = () => render(<Mitre />);
  it('should render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });
});
