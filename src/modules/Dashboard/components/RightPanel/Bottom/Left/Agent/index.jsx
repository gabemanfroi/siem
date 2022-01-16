import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Container } from './style';

export default function Agent() {
  return (
    <Container>
      <div className="inner-container">
        <div className="left">
          <CircularProgressbar value={70} text="70" strokeWidth={1} styles={buildStyles({ pathColor: 'red' })} />
        </div>
        <div className="middle">
          <div />
        </div>
        <div className="right">
          <div />
        </div>
      </div>
    </Container>
  );
}
