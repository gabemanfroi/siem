import { Divider, Grid, Stack, Typography } from '@mui/material';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { IEvent } from 'modules/Shared/interfaces';
import { useTranslation } from 'react-i18next';

const Windows = ({ event }: { event: IEvent }) => {
  const { t } = useTranslation();
  if (!event.data?.win) return <></>;
  return (
    <Stack>
      <Typography variant="h2">WINDOWS</Typography>
      <Divider />
      <Grid container mt={1} gap={1}>
        <Grid item container xs={12}>
          <Grid item xs={3}>
            <Typography variant="h6" color={gray200}>
              {t('Process ID')}
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.data?.win?.system?.processID}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" color={gray200}>
              {t('Task')}
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {event.data?.win?.system?.task}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            {event.data?.win?.eventdata?.targetDomainName && (
              <>
                <Typography variant="h6" color={gray200}>
                  {t('Target Domain Name')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={white}
                  fontSize={16}
                  sx={{ fontWeight: 600 }}
                >
                  {event.data.win.eventdata.targetDomainName}
                </Typography>
              </>
            )}
          </Grid>
          <Grid item xs={3}>
            {event.data?.dest_port && (
              <>
                <Typography variant="h6" color={gray200}>
                  {t('IP Port')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={white}
                  fontSize={16}
                  sx={{ fontWeight: 600 }}
                >
                  {event.data?.dest_port}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h6" color={gray200}>
              {t('Description')}
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={14}
              sx={{ fontWeight: 600, overflowWrap: 'break-word' }}
            >
              {event.data?.win?.system?.message}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Windows;
