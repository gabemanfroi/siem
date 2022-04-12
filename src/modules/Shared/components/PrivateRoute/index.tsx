import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Sidebar } from '..';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import TokenUtil from '../../util/TokenUtil';
import { login, logout } from '../../reducers/authReducer';
import AuthService from '../../api/AuthService';

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
        if (res.status === 200) {
          dispatch(login());
          navigate('/');
        }
      });
    }
  }, []);

  return TokenUtil.getToken() ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
