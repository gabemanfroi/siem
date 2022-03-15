import { Button, Card, TextField, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import loginSchema from 'modules/Login/schemas';
import AuthService from 'modules/Shared/api/AuthService';
import { login } from 'modules/Shared/reducers/authReducer';
import { setErrorMessage } from 'modules/Shared/reducers/errorReducer';
import TokenUtil from 'modules/Shared/util/TokenUtil';
import { useNavigate } from 'react-router-dom';
import { Form, StyledContainer } from './style';
import { useAppDispatch } from '../../modules/Shared/hooks/useAppDispatch';

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { spacing } = useTheme();

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    validationSchema: loginSchema,
    initialValues: loginSchema.getDefault(),
    onSubmit: (values) => {
      AuthService.authenticate(values.email, values.password)
        .then((res) => {
          const { accessToken: token } = res;
          TokenUtil.setToken(token);
          dispatch(login());
          navigate('/');
        })
        .catch(() => {
          dispatch(setErrorMessage({ errorMessage: 'Teste' }));
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
            // @ts-ignore
            error={touched.email && errors.email}
            helperText={touched.email ? errors.email : undefined}
          />
          <TextField
            type="password"
            placeholder="Insira sua senha"
            {...getFieldProps('password')}
            // @ts-ignore
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
