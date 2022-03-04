import { useDispatch, useSelector } from 'react-redux';
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
  const { filter: filterToSend } = useSelector(({ filter }) => filter);

  const {
    lastJsonMessage: overallMetricsMessage,
    sendJsonMessage: sendOverallMetricsMessage,
  } = useWebSocket(process.env.REACT_APP_OVERALL_METRICS_URL);

  const {
    lastJsonMessage: groupedByAgentMessage,
    sendJsonMessage: sendMetricsByGroupMessage,
  } = useWebSocket(process.env.REACT_APP_METRICS_BY_AGENT_URL);

  useEffect(() => {
    if (overallMetricsMessage) {
      dispatch(setOverallMetrics(overallMetricsMessage));
    }
    if (groupedByAgentMessage) {
      dispatch(setGroupedByAgentMetrics(groupedByAgentMessage));
    }
  }, [overallMetricsMessage, groupedByAgentMessage]);

  useEffect(() => {
    sendMetricsByGroupMessage(filterToSend);
    sendOverallMetricsMessage(filterToSend);
  }, [filterToSend]);

  return (
    <Container>
      <Top />
    </Container>
  );
}
