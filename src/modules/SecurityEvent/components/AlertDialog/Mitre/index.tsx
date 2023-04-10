import { Divider, Grid, Stack, Typography } from '@mui/material';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { IEvent } from 'modules/Shared/interfaces';

const Mitre = ({ event }: { event: IEvent }) => {
  if (!event.mitre) return <></>;
  return (
    <Stack>
      <Typography variant="h2">MITRE ATT&CK</Typography>
      <Divider />
      <Grid container mt={1} gap={1}>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography variant="h6" color={gray200}>
              Technique
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.mitre.technique.join(', ')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color={gray200}>
              Tactic
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.mitre.tactic.join(', ')}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography variant="h6" color={gray200}>
              ID
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.mitre.id.join(', ')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Mitre;
