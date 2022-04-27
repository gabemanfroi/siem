import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from 'modules/Shared/components/';
import TokenUtil from 'modules/Shared/utils/TokenUtil';

interface PrivateRouteInterface {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteInterface) => {
  const location = useLocation();
  return TokenUtil.getToken() ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
