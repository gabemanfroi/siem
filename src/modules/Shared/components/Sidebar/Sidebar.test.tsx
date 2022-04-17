import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './index';

const componentToBeRendered = (
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>
);

describe('Sidebar', () => {
  it('must render the component', () => {
    const { container } = render(componentToBeRendered);

    expect(container).not.toBeNull();
  });

  it('must contain 3 buttons to be the navigation items', () => {
    const { queryAllByRole } = render(componentToBeRendered);

    expect(queryAllByRole('button').length).toEqual(3);
  });

  it('must contain the Dashboard navigation button', () => {
    const { queryByText } = render(componentToBeRendered);

    expect(queryByText('Dashboard')).toBeInTheDocument();
  });
});
