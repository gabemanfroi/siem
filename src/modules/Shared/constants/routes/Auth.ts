const initialPath =
  process.env.REACT_APP_ENVIRONMENT === 'development' ? '' : '/auth';
const AUTH = {
  BASE_ENDPOINT: initialPath,
  LOGIN: '/login',
};
export default AUTH;
