import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingSliceInterface {
  isLoading: boolean;
}

const initialState: LoadingSliceInterface = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (
      state,
      { payload: { isLoading } }: PayloadAction<LoadingSliceInterface>
    ) => {
      state.isLoading = isLoading;
    },
  },
});
export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
