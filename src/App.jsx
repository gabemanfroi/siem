import Dashboard from 'pages/Dashboard';
import './sass/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './modules/Shared/components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <PrivateRoute>

              <Dashboard />
            </PrivateRoute>
          )}
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
