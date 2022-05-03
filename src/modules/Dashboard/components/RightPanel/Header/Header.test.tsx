import { render } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  const headerRender = render(<Header />);
  it('must render the component', () => {
    const { container } = headerRender;

    expect(container);
  });
});
