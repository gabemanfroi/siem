import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from 'modules/Shared/components/';
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

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};
export default PrivateRoute;
