import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isAgentModalOpen: false,
    isEventModalOpen: false,
  },
  reducers: {
    setIsAgentModalOpen: (state, { payload: isModalOpen }) => {
      state.isAgentModalOpen = isModalOpen;
    },
    setIsEventModalOpen: (state, { payload: isModalOpen }) => {
      state.isEventModalOpen = isModalOpen;
    },
  },
});
export const { setIsAgentModalOpen, setIsEventModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
