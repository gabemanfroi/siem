import {
  Dashboard,
  IntegrityMonitoring,
  Login,
  Mitre,
  SecurityEvent,
} from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'modules/Shared/components/';
import Agent from 'pages/Agent';

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
        path="/monitoramento-de-integridade"
        element={
          <PrivateRoute>
            <IntegrityMonitoring />
          </PrivateRoute>
        }
      />
      <Route
        path="/eventos"
        element={
          <PrivateRoute>
            <SecurityEvent />
          </PrivateRoute>
        }
      />
      <Route
        path="/agentes"
        element={
          <PrivateRoute>
            <Agent />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
