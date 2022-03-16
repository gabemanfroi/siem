import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterInterface {
  initialDate: number;
  endDate: number;
}

interface FilterSliceInterface {
  filter: FilterInterface;
}

const initialState: FilterSliceInterface = {
  filter: {
    initialDate: new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
    endDate: new Date().getTime(),
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (
      state,
      { payload: { filter } }: PayloadAction<FilterSliceInterface>
    ) => {
      state.filter = filter;
    },
  },
});
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
