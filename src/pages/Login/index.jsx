import { Button, Card, TextField, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import loginSchema from 'modules/Login/schemas';
import AuthService from 'modules/Shared/api/AuthService';
import { login } from 'modules/Shared/reducers/authReducer';
import { setErrorMessage } from 'modules/Shared/reducers/errorReducer';
import TokenUtil from 'modules/Shared/util/TokenUtil';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, StyledContainer } from './style';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { spacing } = useTheme();

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    validationSchema: loginSchema,
    initialValues: loginSchema.getDefault(),
    onSubmit: (values) => {
      AuthService.authenticate(values.email, values.password)
        .then((res) => {
          const { access: token } = res;
          TokenUtil.setToken(token);
          dispatch(login());
          navigate('/');
        })
        .catch(() => {
          dispatch(setErrorMessage('AEHO'));
        });
    },
  });

  return (
    <StyledContainer>
      <Card
        sx={{
          padding: spacing(2),
          position: 'relative',
          zIndex: 50,
          minWidth: 400,
        }}
      >
        <Form onSubmit={handleSubmit}>
          <img src="navbar-logo.png" alt="navbar logo" />
          <TextField
            placeholder="Insira seu e-mail"
            label="E-mail"
            {...getFieldProps('email')}
            fullWidth
            error={touched.email && errors.email}
            helperText={touched.email ? errors.email : undefined}
          />
          <TextField
            type="password"
            placeholder="Insira sua senha"
            {...getFieldProps('password')}
            error={touched.password && errors.password}
            helperText={touched.password ? errors.password : undefined}
            fullWidth
            label="Senha"
          />
          <Button variant="contained" type="submit" fullWidth>
            Login
          </Button>
        </Form>
      </Card>
    </StyledContainer>
  );
}
