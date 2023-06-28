import * as yup from 'yup';

const loginSchema = yup.object({
  username: yup.string().required('E-mail é obrigatório').default(''),
  password: yup.string().required('Senha é obrigatória').default(''),
});

export default loginSchema;
