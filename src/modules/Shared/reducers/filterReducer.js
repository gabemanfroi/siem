import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      initialDate: new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
      endDate: new Date().getTime(),
    },
  },
  reducers: {
    setFilter: (state, { payload: { filter } }) => {
      state.filter = filter;
    },
  },
});
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
