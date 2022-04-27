import {
  Dashboard,
  EventTracker,
  AgentTracker,
  Login,
  Mitre,
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
        path="/central-de-eventos"
        element={
          <PrivateRoute>
            <EventTracker />
          </PrivateRoute>
        }
      />
      <Route
        path="/central-de-agentes"
        element={
          <PrivateRoute>
            <AgentTracker />
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
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
