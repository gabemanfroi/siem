import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './index';

describe('Sidebar', () => {
  it('must render the component', () => {
    const { container } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    expect(container);
  });

  it('must contain buttons to be the navigation items', () => {
    const { queryAllByRole } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    expect(queryAllByRole('button').length).toBeGreaterThan(0);
  });

  it('must contain the Dashboard navigation button', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    expect(queryByText('Dashboard')).toBeInTheDocument();
  });
});
