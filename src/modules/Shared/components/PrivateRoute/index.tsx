import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { Sidebar } from '..';
import TokenUtil from '../../util/TokenUtil';

interface PrivateRouteInterface {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteInterface) {
  const location = useLocation();

  return TokenUtil.getToken() ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
