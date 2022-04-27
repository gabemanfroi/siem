import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './index';

const componentToBeRendered = render(
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>
);

describe('Sidebar', () => {
  it('must render the component', () => {
    const { container } = componentToBeRendered;

    expect(container).not.toBeNull();
  });

  it('must contain buttons to be the navigation items', () => {
    const { queryAllByRole } = componentToBeRendered;

    expect(queryAllByRole('button').length).toBeGreaterThan(0);
  });

  it('must contain the Dashboard navigation button', () => {
    const { queryByText } = componentToBeRendered;

    expect(queryByText('Dashboard')).toBeInTheDocument();
  });
});
