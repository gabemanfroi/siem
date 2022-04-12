import { createSlice } from '@reduxjs/toolkit';

interface ErrorSliceInterface {
  isAuthenticated: boolean;
}

const initialState: ErrorSliceInterface = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
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
