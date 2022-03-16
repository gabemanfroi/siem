import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Sidebar } from '..';
import AuthService from '../../api/AuthService';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { login, logout } from '../../reducers/authReducer';
import TokenUtil from '../../util/TokenUtil';

interface PrivateRouteInterface {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteInterface) {
  const { isAuthenticated } = useAppSelector(({ auth }) => auth);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!TokenUtil.getToken()) dispatch(logout());
    if (!isAuthenticated) {
      AuthService.verifyToken().then((res) => {
        const { status } = res;
        if (status === 'ok') {
          dispatch(login());
          navigate('/');
        }
      });
    }
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
