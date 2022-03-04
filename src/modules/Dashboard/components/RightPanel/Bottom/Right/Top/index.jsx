import { Box, LinearProgress, Tooltip, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Container } from './style';
import { eventTypeConfig } from '../../../../../../Shared/config';

export default function Top() {
  const {
    overallMetrics: { eventsByLevel },
  } = useSelector(({ metrics }) => metrics);

  return (
    <>
      {eventsByLevel && (
        <Container>
          <Typography variant="h4" color="text.primary">
            Total:
            {eventsByLevel.high + eventsByLevel.low + eventsByLevel.medium}
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {Object.keys(eventsByLevel).map((event) => (
              <Tooltip
                title={
                  <Box display="flex" flexDirection="column">
                    <Typography component="span">
                      Nível:
                      <Typography component="span" fontWeight={600}>
                        {` ${eventTypeConfig[event].label}`}
                      </Typography>
                    </Typography>
                    <Typography component="span">
                      Quantidade:
                      <Typography component="span" fontWeight={600}>
                        {` ${eventsByLevel[event]}`}
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
                    flex: eventsByLevel[event],
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: eventTypeConfig[event].color,
                    },
                  }}
                />
              </Tooltip>
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
