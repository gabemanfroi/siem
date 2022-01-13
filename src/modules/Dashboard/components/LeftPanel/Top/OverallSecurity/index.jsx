import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Container } from './style';

export function OverallSecurity() {
  return (
    <Container>
      <h2>Overall Security</h2>
      <CircularProgressbar value={70} text="70" strokeWidth={1} styles={buildStyles({ pathColor: 'red' })} />
    </Container>
  );
}
