import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AgentType } from '../types/AgentType';

interface AgentSliceInterface {
  selectedAgent: AgentType | null;
}

const initialState: AgentSliceInterface = {
  selectedAgent: null,
};

export const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    setSelectedAgent: (
      state,
      { payload: { selectedAgent } }: PayloadAction<AgentSliceInterface>
    ) => {
      state.selectedAgent = selectedAgent;
    },
  },
});
export const { setSelectedAgent } = agentSlice.actions;

export default agentSlice.reducer;
