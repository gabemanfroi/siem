import { createSlice } from '@reduxjs/toolkit';

export const agentSlice = createSlice({
  name: 'agent',
  initialState: {
    selectedAgent: null,
  },
  reducers: {
    setSelectedAgent: (state, { payload: agent }) => {
      state.selectedAgent = agent;
    },
  },
});
export const { setSelectedAgent } = agentSlice.actions;

export default agentSlice.reducer;
