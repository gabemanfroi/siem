import { render } from '@testing-library/react';
import IntegrityMonitoring from './index';

describe('IntegrityMonitoring', () => {
  const renderer = () => render(<IntegrityMonitoring />);
  it('should render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });
});
