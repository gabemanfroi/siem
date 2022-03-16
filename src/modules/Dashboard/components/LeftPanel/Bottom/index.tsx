import { ResponseTime } from './ResponseTime';
import { LastContainer } from './LastContainer';
import { Container } from './style';

export default function Bottom() {
  return (
    <Container>
      <ResponseTime />
      <LastContainer />
    </Container>
  );
}
