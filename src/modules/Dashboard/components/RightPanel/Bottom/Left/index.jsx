import Agents from 'modules/Shared/assets/data/agents.json';
import { Container } from './style';
import Agent from './Agent';

export default function Left() {
  /* const [agents, setAgents] = useState([]);

  const { lastMessage, lastJsonMessage } = useWebSocket(
    process.env.REACT_APP_METRICS_BY_AGENT_URL
  );

  useEffect(() => {
    if (lastJsonMessage) {
      console.log(lastJsonMessage);
      setAgents(lastJsonMessage.metrics);
    }
  }, [lastMessage, lastJsonMessage]); */
  return (
    <Container>
      <h5>Agentes</h5>
      {Agents.length > 0 && Agents.map((agent) => <Agent agent={agent} />)}
    </Container>
  );
}
