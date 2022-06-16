const TokenUtil = () => ({
  getToken: () => {
    if (process.env.REACT_APP_TOKEN_KEY_NAME) {
      return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY_NAME);
    }
    return null;
  },
  setToken: (token: string) => {
    if (process.env.REACT_APP_TOKEN_KEY_NAME) {
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY_NAME, token);
    }
  },
  removeToken: () => {
    if (process.env.REACT_APP_TOKEN_KEY_NAME) {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY_NAME);
    }
  },
});

export default TokenUtil;
