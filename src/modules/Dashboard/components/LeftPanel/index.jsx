import { useDispatch } from 'react-redux';
import useWebSocket from 'react-use-websocket';
import { useEffect } from 'react';
import { Container } from './style';
import Top from './Top';
import { setOverallMetrics } from '../../../Shared/reducers/overallMetricsReducer';

export default function LeftPanel() {
  const dispatch = useDispatch();

  const { lastJsonMessage } = useWebSocket(process.env.REACT_APP_OVERALL_URL);

  useEffect(() => {
    if (lastJsonMessage) {
      console.log(lastJsonMessage);
      dispatch(setOverallMetrics(lastJsonMessage));
    }
  }, [lastJsonMessage]);
  return (
    <Container>
      <Top />
    </Container>
  );
}
