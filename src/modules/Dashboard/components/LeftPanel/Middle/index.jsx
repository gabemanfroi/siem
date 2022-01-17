import LinearProgressBar from 'modules/Shared/components/LinearProgressBar';
import {
  dark100, lightBlue, primaryGreen, primaryRed, white,
} from 'modules/Shared/stylesHelpers/colorVariables';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Container } from './style';

export default function Middle() {
  return (
    <Container>
      <LinearProgressBar value={50} strokeColor={primaryGreen} />
      <LinearProgressBar value={15} strokeColor={primaryRed} />
      <CircularProgressbar
        value={75}
        text={`${75}%`}
        circleRatio={0.5}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: 'butt',
          trailColor: dark100,
          pathColor: lightBlue,
          textColor: white,
        })}
      />
    </Container>
  );
}
