import { IEvent } from 'modules/Shared/interfaces';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { useTranslation } from 'react-i18next';

const Rule = ({ event }: { event: IEvent }) => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Typography variant="h2" textTransform="uppercase">
        {t('Rule')}
      </Typography>
      <Divider />
      <Grid container mt={1} gap={1}>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography variant="h6" color={gray200}>
              {t('Description')}
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
              {t('Fired Times')}
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event?.rule.firedtimes}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Rule;
