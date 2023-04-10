import { render } from '@testing-library/react';
import Header from 'modules/Shared/components/Header/index';

describe('Header', () => {
  const headerRender = render(<Header />);
  it('must render the component', () => {
    const { container } = headerRender;

    expect(container);
  });
});
