import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import {
  dark100,
  primaryBlue,
  textWhite,
} from 'modules/Shared/stylesHelpers/colorVariables';
import { Container } from './style';

export default function Left({ reliabilityLevel }) {
  return (
    <Container>
      <CircularProgressbar
        value={reliabilityLevel.toFixed(0)}
        text={`${reliabilityLevel.toFixed(0)}%`}
        styles={buildStyles({
          trailColor: dark100,
          pathColor: primaryBlue,
          textColor: textWhite,
        })}
      />
    </Container>
  );
}
