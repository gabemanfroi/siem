import { createSlice } from '@reduxjs/toolkit';

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    overallMetrics: {},
    groupedByAgentMetrics: [],
    dateHistogram: [],
  },
  reducers: {
    setOverallMetrics: (state, { payload: metrics }) => {
      state.overallMetrics = metrics;
    },
    setGroupedByAgentMetrics: (state, { payload: metrics }) => {
      state.groupedByAgentMetrics = metrics;
    },
    setDateHistogram: (state, { payload: histogram }) => {
      state.groupedByAgentMetrics = histogram;
    },
  },
});
export const { setOverallMetrics, setGroupedByAgentMetrics, setDateHistogram } =
  metricsSlice.actions;

export default metricsSlice.reducer;
