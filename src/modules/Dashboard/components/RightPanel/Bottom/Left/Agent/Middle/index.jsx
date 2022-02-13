import { Box, LinearProgress, Tooltip, Typography } from '@mui/material';
import { eventTypeConfig } from 'modules/Shared/config';
import { FaNetworkWired } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import { textGray } from '../../../../../../../Shared/stylesHelpers/colorVariables';
import { Container } from './style';

export default function Middle({ name, ipAddress, eventAmounts }) {
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
        {eventAmounts.map((event) => (
          <Tooltip
            title={
              <Box display="flex" flexDirection="column">
                <Typography component="span">
                  Nível:
                  <Typography component="span" fontWeight={600}>
                    {` ${eventTypeConfig[event.type].label}`}
                  </Typography>
                </Typography>
                <Typography component="span">
                  Quantidade:
                  <Typography component="span" fontWeight={600}>
                    {` ${event.quantity}`}
                  </Typography>
                </Typography>
              </Box>
            }
          >
            <LinearProgress
              key={event.type}
              value={100}
              variant="determinate"
              sx={{
                flex: event.quantity,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: eventTypeConfig[event.type].color,
                },
              }}
            />
          </Tooltip>
        ))}
        {/* <LinearProgressBar
          value={reliabilityLevel}
          strokeColor={primaryGreen}
        /> */}
      </div>
    </Container>
  );
}
