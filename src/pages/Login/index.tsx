import { Button, Card, TextField, useTheme } from '@mui/material';

import { useFormik } from 'formik';
import loginSchema from 'modules/Login/schemas';
import { TokenUtil } from 'modules/Shared/utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'modules/Shared/constants/routes';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { Form, StyledContainer } from './style';

export default function Login() {
  const navigate = useNavigate();
  const { spacing } = useTheme();

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    validationSchema: loginSchema,
    initialValues: loginSchema.getDefault(),
    onSubmit: async (values) => {
      const response = await AxiosClient.post(
        `${ROUTES.AUTH.BASE_ENDPOINT}/auth/login`,
        {
          email: values.email,
          password: values.password,
        }
      );
      TokenUtil().setToken(response.data.accessToken);
      navigate('/');
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
