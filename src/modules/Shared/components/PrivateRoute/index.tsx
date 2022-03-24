import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Sidebar } from '..';
import { useAppSelector } from '../../hooks/useAppSelector';

interface PrivateRouteInterface {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteInterface) {
  const { isAuthenticated } = useAppSelector(({ auth }) => auth);
  const location = useLocation();
  /* const navigate = useNavigate();
  const dispatch = useAppDispatch(); */

  useEffect(() => {
    /* if (!TokenUtil.getToken()) dispatch(logout());
    if (!isAuthenticated) {
      AuthService.verifyToken().then((res) => {
        const { status } = res;
        if (status === 'ok') {
          dispatch(login());
          navigate('/');
        }
      });
    } */
  }, []);
  return isAuthenticated ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
