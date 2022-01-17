/* eslint-disable react/jsx-props-no-spreading */
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Sidebar } from '../index';

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    isAuthenticated ? (
      <>
        <Sidebar />
        {children}
      </>
    ) : <Navigate to="/login" state={{ from: location }} />
  );
}
