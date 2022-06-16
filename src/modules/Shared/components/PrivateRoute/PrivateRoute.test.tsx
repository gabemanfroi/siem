import { cleanup, render } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import PrivateRoute from './index';

const mockGetToken = jest.fn();

jest.mock('modules/Shared/utils', () => ({
  TokenUtil: () => ({
    getToken: mockGetToken(),
  }),
}));

beforeEach(() => {
  mockGetToken.mockImplementation(() => () => null);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/utils');
});

const privateRouteRender = () =>
  render(
    <MemoryRouter initialIndex={0} initialEntries={['/', '/login']}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div>Test Content</div>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<div>Login Test</div>} />
      </Routes>
    </MemoryRouter>
  );

describe('PrivateRoute', () => {
  it('must render the component', () => {
    const { container } = privateRouteRender();

    expect(container);
  });
  it('must redirect to the Login page if not authenticated', () => {
    mockGetToken.mockImplementation(() => () => null);
    const { getByText, queryByText } = privateRouteRender();

    expect(getByText('Login Test'));
    expect(queryByText('Test Content')).toBeNull();
  });
  it('must be able to access protected page if authenticated', () => {
    mockGetToken.mockImplementation(() => () => 'thisisnotatoken');

    const { getByText, queryByText } = privateRouteRender();

    expect(getByText('Test Content'));
    expect(queryByText('Login Test')).toBeNull();
  });
});
