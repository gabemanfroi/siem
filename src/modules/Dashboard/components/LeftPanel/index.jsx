import { useDispatch } from 'react-redux';
import useWebSocket from 'react-use-websocket';
import { useEffect } from 'react';
import { Container } from './style';
import Top from './Top';
import {
  setGroupedByAgentMetrics,
  setOverallMetrics,
} from '../../../Shared/reducers/metricsReducer';

export default function LeftPanel() {
  const dispatch = useDispatch();

  const { lastJsonMessage: overallMetricsMessage } = useWebSocket(
    process.env.REACT_APP_OVERALL_METRICS_URL
  );

  const { lastJsonMessage: groupedByAgentMessage } = useWebSocket(
    process.env.REACT_APP_METRICS_BY_AGENT_URL
  );

  useEffect(() => {
    if (overallMetricsMessage) {
      dispatch(setOverallMetrics(overallMetricsMessage));
    }
    if (groupedByAgentMessage) {
      dispatch(setGroupedByAgentMetrics(groupedByAgentMessage));
    }
  }, [overallMetricsMessage, groupedByAgentMessage]);
  return (
    <Container>
      <Top />
    </Container>
  );
}
