import Dashboard from 'pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import PrivateRoute from 'modules/Shared/components/PrivateRoute';
import EventTracker from 'pages/EventTracker';
import AgentTracker from 'pages/AgentTracker';

export default function Router() {
  return (
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
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
