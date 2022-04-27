import { Container } from './style';
import WidgetsGrid from './WidgetsGrid';
import Header from './Header';

export default function RightPanel() {
  return (
    <Container>
      <Header />
      <WidgetsGrid />
    </Container>
  );
}
