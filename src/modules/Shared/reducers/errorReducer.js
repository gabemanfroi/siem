import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    errorMessage: null,
  },
  reducers: {
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
