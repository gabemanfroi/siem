import {
  Dashboard,
  IntegrityMonitoring,
  Login,
  Mitre,
  SecurityEvent,
  Vulnerability,
} from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'modules/Shared/components/';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/mitre"
        element={
          <PrivateRoute>
            <Mitre />
          </PrivateRoute>
        }
      />
      <Route
        path="/vulnerabilidades"
        element={
          <PrivateRoute>
            <Vulnerability />
          </PrivateRoute>
        }
      />
      <Route
        path="/monitoramento-de-integridade"
        element={
          <PrivateRoute>
            <IntegrityMonitoring />
          </PrivateRoute>
        }
      />
      <Route
        path="/eventos-de-seguranca"
        element={
          <PrivateRoute>
            <SecurityEvent />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
