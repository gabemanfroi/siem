import { Box, LinearProgress, Tooltip, Typography } from '@mui/material';
import { eventTypeConfig } from 'modules/Shared/config';
import { FaNetworkWired } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import { textGray } from '../../../../../../../Shared/stylesHelpers/colorVariables';
import { Container } from './style';

export default function Middle({ name, ip, eventsByLevel }) {
  return (
    <Container>
      <div className="header">
        <div className="group-name">
          <FaNetworkWired size={24} color={textGray} />
          <h5>
            <span>{ip || ' - '}</span>
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
        {Object.keys(eventsByLevel).map((key) => (
          <Tooltip
            title={
              <Box display="flex" flexDirection="column">
                <Typography component="span">
                  Nível:
                  <Typography component="span" fontWeight={600}>
                    {` ${eventTypeConfig[key].label}`}
                  </Typography>
                </Typography>
                <Typography component="span">
                  Quantidade:
                  <Typography component="span" fontWeight={600}>
                    {` ${eventsByLevel[key]}`}
                  </Typography>
                </Typography>
              </Box>
            }
          >
            <LinearProgress
              key={key}
              value={100}
              variant="determinate"
              sx={{
                flex: eventsByLevel[key],
                '& .MuiLinearProgress-bar': {
                  backgroundColor: eventTypeConfig[key].color,
                  height: '8px',
                },
              }}
            />
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
