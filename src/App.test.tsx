import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const appRender = render(<App />);

  it('must render the component', () => {
    const { container } = appRender;

    expect(container);
  });
});
