import { Container } from './style';
import Bottom from './Bottom';
import Middle from './Middle';
import Top from './Top';

// TODO:DEFINIR OS NOMES DOS COMPONENTES MELHOR APÓS DECIDIR SUAS FUNÇÕES
export default function LeftPanel() {
  return (
    <Container>
      <Top />
      <Middle />
      <Bottom />
    </Container>
  );
}
