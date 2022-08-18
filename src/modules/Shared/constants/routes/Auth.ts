const AUTH = {
  BASE_ENDPOINT:
    process.env.REACT_APP_ENVIRONMENT === 'production'
      ? '/auth/auth'
      : '/api/auth',
  LOGIN: '/login',
};
export default AUTH;
