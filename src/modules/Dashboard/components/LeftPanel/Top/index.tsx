import { Container } from './style';
import { OverallSecurity } from './OverallSecurity';

export default function Top() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <OverallSecurity />
    </Container>
  );
}
