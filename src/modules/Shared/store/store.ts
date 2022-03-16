import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import modalReducer from '../reducers/modalReducer';
import loadingReducer from '../reducers/loadingReducer';
import agentReducer from '../reducers/agentReducer';
import dashboardReducer from '../reducers/dashboardReducer';
import errorReducer from '../reducers/errorReducer';
import filterReducer from '../reducers/filterReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    loading: loadingReducer,
    agent: agentReducer,
    dashboard: dashboardReducer,
    error: errorReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
