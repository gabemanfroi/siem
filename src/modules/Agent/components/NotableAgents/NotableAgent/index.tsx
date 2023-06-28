import { Grid, Typography } from '@mui/material';
import { INotableAgent } from 'modules/Agent/interfaces/INotableAgents';
import { useAgentContext } from 'modules/Agent/hooks';
import { Container } from 'modules/Agent/components/NotableAgents/NotableAgent/styles';
import { LineChart } from 'modules/Shared/components/Charts/LineChart';

interface NotableAgentProps {
  notableAgent: INotableAgent;
}

const NotableAgent = ({ notableAgent }: NotableAgentProps) => {
  const { setSelectedAgentId, setIsAgentDialogOpen } = useAgentContext();

  return (
    <Container
      container
      p={1}
      px={2}
      onClick={() => {
        setSelectedAgentId(notableAgent.id);
        setIsAgentDialogOpen(true);
      }}
      flexDirection="row"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      maxHeight={150}
    >
      <Grid
        item
        container
        justifyContent="space-between"
        direction="column"
        xs={6}
        gap={2}
        height={1}
      >
        <Grid item alignItems="start">
          <Typography fontSize={16} textTransform="capitalize">
            {notableAgent.name} - {notableAgent.ip}
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="start">
          <Typography fontSize={16}>Vulnerabilities</Typography>
          <Typography fontSize={24}>
            {notableAgent.totalVulnerabilities}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6} height={1}>
        <LineChart
          options={{
            title: {
              text: 'Evolução do Número de Eventos',
            },
            subtitle: { text: 'Último 1 dia' },
            chart: { id: 'notableAgentChart' },
            xaxis: {
              type: 'datetime',
              labels: {
                show: false,
              },
            },
            series: [
              {
                name: 'Número de Eventos',
                data: notableAgent.alertsEvolution?.series?.[0].data,
              },
            ],
          }}
        />
      </Grid>
    </Container>
  );
};

export default NotableAgent;
