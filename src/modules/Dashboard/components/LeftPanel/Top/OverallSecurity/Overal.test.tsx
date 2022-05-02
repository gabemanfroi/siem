import { render } from '@testing-library/react';
import { OverallSecurity } from './index';

describe('OverallSecurity', () => {
  const overallSecurityRender = render(<OverallSecurity />);
  it('should render the component', () => {
    const { container } = overallSecurityRender;

    expect(container);
  });
});
