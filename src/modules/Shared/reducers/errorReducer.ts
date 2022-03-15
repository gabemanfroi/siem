import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorSliceInterface {
  errorMessage: string | null;
}

const initialState: ErrorSliceInterface = {
  errorMessage: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorMessage: (
      state,
      { payload: { errorMessage } }: PayloadAction<ErrorSliceInterface>
    ) => {
      state.errorMessage = errorMessage;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
