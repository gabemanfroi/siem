import { createSlice } from '@reduxjs/toolkit';

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    overallMetrics: {},
    groupedByAgentMetrics: [],
  },
  reducers: {
    setOverallMetrics: (state, { payload: overallMetrics }) => {
      state.overallMetrics = overallMetrics;
    },
    setGroupedByAgentMetrics: (state, { payload: overallMetrics }) => {
      state.groupedByAgentMetrics = overallMetrics;
    },
  },
});
export const { setOverallMetrics, setGroupedByAgentMetrics } =
  metricsSlice.actions;

export default metricsSlice.reducer;
