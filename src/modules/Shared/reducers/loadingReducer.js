import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, isLoading) => {
      state.isLoading = isLoading;
    },
  },
});
export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
