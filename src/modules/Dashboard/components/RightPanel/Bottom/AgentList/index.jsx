import { useSelector } from 'react-redux';
import Agents from 'modules/Shared/assets/data/agents.json';
import { Container } from './style';
import Agent from './Agent';

export default function AgentList() {
  const { groupedByAgentMetrics } = useSelector(({ metrics }) => metrics);

  return (
    <Container>
      <h5>Agentes</h5>

      {groupedByAgentMetrics.length > 0 &&
        groupedByAgentMetrics.map((agent) => <Agent agent={agent} />)}
      {!groupedByAgentMetrics.length > 0 &&
        Agents.map((agent) => <Agent agent={agent} />)}
    </Container>
  );
}
