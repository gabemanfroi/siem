import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
  },
});
export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
