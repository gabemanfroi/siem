import {
  dark100,
  primaryBlue,
  white,
} from 'modules/Shared/stylesHelpers/colorVariables';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Container } from './style';

export default function Middle() {
  return (
    <Container>
      <CircularProgressbar
        value={75}
        text={`${75}%`}
        circleRatio={0.5}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: 'butt',
          trailColor: dark100,
          pathColor: primaryBlue,
          textColor: white,
        })}
      />
    </Container>
  );
}
