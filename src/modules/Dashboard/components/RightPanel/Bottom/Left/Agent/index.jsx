import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import {
  dark100,
  lightBlue,
  primaryGreen,
  primaryRed,
  textGray,
  textWhite,
} from 'modules/Shared/stylesHelpers/colorVariables';
import { FaNetworkWired } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import LinearProgressBar from 'modules/Shared/components/LinearProgressBar';
import { Container } from './style';

export default function Agent() {
  return (
    <Container>
      <div className="left">
        <CircularProgressbar
          value={50}
          text={`${50}%`}
          styles={buildStyles({
            trailColor: dark100,
            pathColor: lightBlue,
            textColor: textWhite,
          })}
        />
      </div>
      <div className="middle">
        <div className="header">
          <div className="group-name">
            <FaNetworkWired size={24} color={textGray} />
            <h5>
              <span>teste</span>
            </h5>
          </div>
          <div className="device-name">
            <GoDeviceDesktop size={24} color={textGray} />
            <h5>
              <span>teste</span>
            </h5>
          </div>
        </div>
        <div className="metrics">
          <LinearProgressBar strokeColor={primaryGreen} value={50} />
          <LinearProgressBar strokeColor={primaryRed} value={20} />
        </div>
      </div>
      <div className="right">
        <div />
      </div>
    </Container>
  );
}
