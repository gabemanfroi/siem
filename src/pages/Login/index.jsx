import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../modules/Shared/services/AuthService';

import TokenUtil from '../../modules/Shared/util/TokenUtil';
import { login } from '../../modules/Shared/reducers/authReducer';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onFormSubmit(event) {
    if (event) event.preventDefault();
    AuthService.authenticate(username, password).then((res) => {
      const { refresh: token } = res;
      TokenUtil.setToken(token);
      dispatch(login());
      navigate('/');
    }).catch();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login </button>
    </form>

  );
}
