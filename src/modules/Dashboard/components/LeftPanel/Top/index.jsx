import useWebSocket from 'react-use-websocket';
import { useState } from 'react';
import { Container } from './style';
import { OverallSecurity } from './OverallSecurity';

export default function Top() {
  const [testState, setTestState] = useState(0);

  const { lastJsonMessage } = useWebSocket(
    process.env.REACT_APP_OVERALL_INFO_URL,
    {
      onOpen: () => console.log('Connected'),
      onMessage: () => {
        if (lastJsonMessage) {
          setTestState(lastJsonMessage.teste);
        }
      },
    }
  );

  return (
    <Container>
      <h1>Dashboard</h1>
      <OverallSecurity level={testState} />
    </Container>
  );
}
