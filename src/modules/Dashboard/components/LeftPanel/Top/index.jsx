import useWebSocket from 'react-use-websocket';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './style';
import { OverallSecurity } from './OverallSecurity';
import { setDateHistogram } from '../../../../Shared/reducers/metricsReducer';

export default function Top() {
  const dispatch = useDispatch();
  const { lastJsonMessage } = useWebSocket(
    process.env.REACT_APP_DATE_HISTOGRAM_URL
  );
  useEffect(() => {
    if (lastJsonMessage) {
      console.log('hi');
      dispatch(setDateHistogram(lastJsonMessage));
    }
  }, [lastJsonMessage]);
  return (
    <Container>
      <h1>Dashboard</h1>
      <OverallSecurity />
    </Container>
  );
}
