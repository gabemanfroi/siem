import { Container } from './style';

export default function LinearProgressBar({
  value, strokeHeight = 5, title = 'teste', strokeColor = 'green', total = 'teste2',
}) {
  return (
    <Container value={value} strokeHeight={strokeHeight} strokeColor={strokeColor}>
      <div className="bar-header">
        <h5>
          <span>{title}</span>
        </h5>
        {total && <span>{total}</span>}
      </div>
      <div className="progress-bar" />
    </Container>
  );
}
