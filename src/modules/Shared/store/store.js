import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import modalReducer from '../reducers/modalReducer';
import loadingReducer from '../reducers/loadingReducer';
import agentReducer from '../reducers/agentReducer';
import overallMetricsReducer from '../reducers/overallMetricsReducer';
import errorReducer from '../reducers/errorReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    loading: loadingReducer,
    agent: agentReducer,
    overallMetrics: overallMetricsReducer,
    error: errorReducer,
  },
});
