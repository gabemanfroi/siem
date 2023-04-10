import { IEventAgent } from 'modules/Shared/interfaces/IEvent';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { useTranslation } from 'react-i18next';

interface AgentParams {
  agent: IEventAgent;
}

const Agent = ({ agent }: AgentParams) => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Typography variant="h2" textTransform="uppercase">
        {t('Agent')}
      </Typography>
      <Divider />
      <Grid container mt={1} gap={1}>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography variant="h6" color={gray200}>
              {t('Name')}
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {agent.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color={gray200}>
              IP
            </Typography>
            <Typography
              variant="subtitle2"
              color={white}
              fontSize={16}
              sx={{ fontWeight: 600 }}
            >
              {agent.ip}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Agent;
