import {
  Box,
  LinearProgress,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material';
import { eventTypeConfig } from 'modules/Shared/core';

import { useDashboard, useLoading } from 'modules/Shared/contexts';
import { Container } from './style';

export default function OverallEventsCategory() {
  const {
    overall: { eventsByLevel },
  } = useDashboard();
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{ flex: 1, borderRadius: '5px' }}
          animation="wave"
        />
      )}
      {!isLoading && (
        <Container>
          <Typography variant="h4" color="text.primary">
            Total:
            {eventsByLevel.high + eventsByLevel.low + eventsByLevel.medium}
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {Object.keys(eventsByLevel).map((key) => (
              <Tooltip
                key={key}
                title={
                  <Box display="flex" flexDirection="column">
                    <Typography component="span">
                      Nível:
                      <Typography component="span" fontWeight={600}>
                        {` ${
                          eventTypeConfig[key as 'low' | 'medium' | 'high']
                            .label
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
