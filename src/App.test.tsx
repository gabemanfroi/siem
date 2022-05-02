import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const appRender = render(<App />);

  it('should render the component', () => {
    const { container } = appRender;

    expect(container).toBeNull();
  });
});
