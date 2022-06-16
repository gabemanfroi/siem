import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório')
    .default(''),
  password: yup.string().required('Senha é obrigatória').default(''),
});

export default loginSchema;
