import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  dark100,
  lightBlue,
  white,
} from 'modules/Shared/stylesHelpers/colorVariables';
import { Container } from './style';

export function OverallSecurity({ level }) {
  return (
    <Container>
      <h2>Overall Security</h2>
      <CircularProgressbar
        value={level}
        text={`${level}%`}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: lightBlue,
          trailColor: dark100,
          textColor: white,
        })}
      />
    </Container>
  );
}
