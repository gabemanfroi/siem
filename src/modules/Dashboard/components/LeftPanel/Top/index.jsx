import useWebSocket from 'react-use-websocket';
import { useEffect, useState } from 'react';
import { Container } from './style';
import { OverallSecurity } from './OverallSecurity';

export default function Top() {
  const [testState, setTestState] = useState(0);

  const { lastMessage, lastJsonMessage } = useWebSocket(
    process.env.REACT_APP_OVERALL_INFO_URL
  );

  useEffect(() => {
    if (lastJsonMessage) {
      setTestState(lastJsonMessage.overall_danger_level.toFixed(0));
    }
  }, [lastMessage, lastJsonMessage]);

  return (
    <Container>
      <h1>Dashboard</h1>
      <OverallSecurity level={testState} />
    </Container>
  );
}
