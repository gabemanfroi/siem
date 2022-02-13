import Agents from 'modules/Shared/assets/data/agents.json';
import { Container } from './style';
import Agent from './Agent';

export default function Left() {
  return (
    <Container>
      <h5>Agentes</h5>
      {Agents.length > 0 && Agents.map((agent) => <Agent agent={agent} />)}
    </Container>
  );
}
