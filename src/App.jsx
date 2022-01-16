import Dashboard from 'pages/Dashboard';
import './sass/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './modules/Shared/components';
import Login from './pages/Login';
import PrivateRoute from './modules/Shared/components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Sidebar />
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={(
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            )}
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}
