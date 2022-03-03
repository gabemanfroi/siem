import { createSlice } from '@reduxjs/toolkit';

export const overallMetricsSlice = createSlice({
  name: 'overallMetrics',
  initialState: {
    metrics: {},
  },
  reducers: {
    setOverallMetrics: (state, { payload: metrics }) => {
      state.metrics = metrics;
    },
  },
});
export const { setOverallMetrics } = overallMetricsSlice.actions;

export default overallMetricsSlice.reducer;
