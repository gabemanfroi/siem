export default {
  getToken() {
    return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY_NAME);
  },
  setToken(token) {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY_NAME, token);
  },
  removeToken() {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY_NAME);
  },
};
