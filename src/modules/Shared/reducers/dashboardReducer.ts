import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AgentType } from '../types/AgentType';
import { EventsByLevelType, MetricsType } from '../types/MetricsType';

interface DashboardSliceInterface {
  overall: MetricsType;
  groupedByAgent: AgentType[];
  dateHistogram: {
    timestamp: number;
    eventsByLevel: EventsByLevelType;
  }[];
}

const initialState: DashboardSliceInterface = {
  overall: {
    trustLevel: 0,
    eventsByLevel: {
      low: 0,
      high: 0,
      medium: 0,
    },
  },
  groupedByAgent: [],
  dateHistogram: [],
};

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData: (
      state,
      {
        payload: { overall, groupedByAgent, dateHistogram },
      }: PayloadAction<DashboardSliceInterface>
    ) => {
      state.dateHistogram = dateHistogram;
      state.overall = overall;
      state.groupedByAgent = groupedByAgent;
    },
  },
});
export const { setDashboardData } = DashboardSlice.actions;

export default DashboardSlice.reducer;
