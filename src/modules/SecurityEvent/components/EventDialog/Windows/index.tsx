import { Divider, Grid, Stack, Typography } from '@mui/material';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { IEvent } from 'modules/Shared/interfaces';

const Windows = ({ event }: { event: IEvent }) => {
  if (!event.win) return <></>;
  return (
    <Stack>
      <Typography variant="h2">WINDOWS</Typography>
      <Divider />
      <Grid container mt={1} gap={1}>
        <Grid item container xs={12}>
          <Grid item xs={3}>
            <Typography variant="h6" color={gray200}>
              Process ID
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.win.processId}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" color={gray200}>
              Task
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.win.task}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" color={gray200}>
              Target Domain Name
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.win.targetDomainName}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" color={gray200}>
              IP Port
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.win.ipPort}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h6" color={gray200}>
              Description
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={14}
              sx={{ fontWeight: 600 }}
            >
              {event.win.message}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Windows;
