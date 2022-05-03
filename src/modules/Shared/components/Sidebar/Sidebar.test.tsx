import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './index';

const routerRender = () =>
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );

describe('Sidebar', () => {
  it('must render the component', () => {
    const { container } = routerRender();

    expect(container);
  });

  it('must contain buttons to be the navigation items', () => {
    const { queryAllByRole } = routerRender();

    expect(queryAllByRole('button').length).toBeGreaterThan(0);
  });

  it('must contain the Dashboard navigation button', () => {
    const { queryByText } = routerRender();

    expect(queryByText('Dashboard')).toBeInTheDocument();
  });
});
