import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { TokenUtil } from 'modules/Shared/utils';

interface PrivateRouteInterface {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteInterface) => {
  const { getToken } = TokenUtil();
  const location = useLocation();

  if (!getToken()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
export default PrivateRoute;
