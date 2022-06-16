import { render } from '@testing-library/react';
import Top from './index';

describe('Top', () => {
  const topRender = render(<Top />);
  it('must render the component', () => {
    const { container } = topRender;

    expect(container);
  });
});
