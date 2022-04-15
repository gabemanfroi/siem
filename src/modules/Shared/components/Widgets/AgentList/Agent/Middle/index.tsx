import { Box, LinearProgress, Tooltip, Typography } from '@mui/material';
import { eventTypeConfig } from 'modules/Shared/config';
import { FaNetworkWired } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import { gray300 } from '../../../../../../../Shared/stylesHelpers/colorVariables';
import { Container } from './style';

interface MiddleInterface {
  name: string;
  ip: string | '';
  eventsByLevel: {
    low: number;
    medium: number;
    high: number;
  };
}

export default function Middle({
  name,
  ip = '',
  eventsByLevel,
}: MiddleInterface) {
  return (
    <Container>
      <div className="header">
        <div className="group-name">
          <FaNetworkWired size={24} color={gray300} />
          <h5>
            <span>{ip || ' - '}</span>
          </h5>
        </div>
        <div className="device-name">
          <GoDeviceDesktop size={24} color={gray300} />
          <h5>
            <span>{name}</span>
          </h5>
        </div>
      </div>
      <div className="metrics">
        {Object.keys(eventsByLevel).map((key) => (
          <Tooltip
            key={key}
            title={
              <Box display="flex" flexDirection="column">
                <Typography component="span">
                  Nível:
                  <Typography component="span" fontWeight={600}>
                    {` ${
                      eventTypeConfig[key as 'low' | 'medium' | 'high'].label
                    }`}
                  </Typography>
                </Typography>
                <Typography component="span">
                  Quantidade:
                  <Typography component="span" fontWeight={600}>
                    {` ${eventsByLevel[key as 'low' | 'medium' | 'high']}`}
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
                flex: eventsByLevel[key as 'low' | 'medium' | 'high'],
                '& .MuiLinearProgress-bar': {
                  backgroundColor:
                    eventTypeConfig[key as 'low' | 'medium' | 'high'].color,
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
