import { IEvent } from 'modules/Shared/interfaces';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';

const Rule = ({ event }: { event: IEvent }) => (
  <Stack>
    <Typography variant="h2">RULE</Typography>
    <Divider />
    <Grid container mt={1} gap={1}>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6" color={gray200}>
            Description
          </Typography>
          <Typography
            variant="subtitle2"
            color={white}
            fontSize={16}
            sx={{ fontWeight: 600 }}
          >
            {event?.rule.description}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color={gray200}>
            Level
          </Typography>
          <Typography
            variant="subtitle2"
            color={white}
            fontSize={16}
            sx={{ fontWeight: 600 }}
          >
            {event?.rule.level}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6" color={gray200}>
            Fired Times
          </Typography>
          <Typography
            variant="subtitle2"
            color={white}
            fontSize={16}
            sx={{ fontWeight: 600 }}
          >
            {event?.rule.firedTimes}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Stack>
);

export default Rule;
