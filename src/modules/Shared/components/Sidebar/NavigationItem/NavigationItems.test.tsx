import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationItem from './index';

describe('NavigationItem', () => {
  it('should render the component', () => {
    const path = '/test';
    const title = 'Test Title';
    const { container } = render(
      <BrowserRouter>
        <NavigationItem path={path} title={title}>
          <div>Icon</div>
        </NavigationItem>
      </BrowserRouter>
    );

    expect(container);
  });
});
