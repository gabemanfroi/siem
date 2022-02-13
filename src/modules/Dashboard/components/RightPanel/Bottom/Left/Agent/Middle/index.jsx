import { FaNetworkWired } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import {
  primaryGreen,
  textGray,
} from '../../../../../../../Shared/stylesHelpers/colorVariables';
import LinearProgressBar from '../../../../../../../Shared/components/LinearProgressBar';
import { Container } from './style';

export default function Middle({ reliabilityLevel, name, ipAddress }) {
  return (
    <Container>
      <div className="header">
        <div className="group-name">
          <FaNetworkWired size={24} color={textGray} />
          <h5>
            <span>{ipAddress || ' - '}</span>
          </h5>
        </div>
        <div className="device-name">
          <GoDeviceDesktop size={24} color={textGray} />
          <h5>
            <span>{name}</span>
          </h5>
        </div>
      </div>
      <div className="metrics">
        <LinearProgressBar
          value={reliabilityLevel}
          strokeColor={primaryGreen}
        />
      </div>
    </Container>
  );
}
