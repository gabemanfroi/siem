import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import { useEffect } from 'react';
import Vulnerability from 'modules/SecurityEvent/components/EventDialog/Vulnerability';
import Windows from 'modules/SecurityEvent/components/EventDialog/Windows';
import Rule from 'modules/SecurityEvent/components/EventDialog/Rule';
import Mitre from 'modules/SecurityEvent/components/EventDialog/Mitre';
import { gray200, white } from 'modules/Shared/helpers/styles/Colors';
import { IAgentFromEvent } from 'modules/Shared/interfaces/IEvent';

interface AgentParams {
  agent: IAgentFromEvent;
}

const Agent = ({ agent }: AgentParams) => (
  <Stack>
    <Typography variant="h2" textTransform="uppercase">
      Agent
    </Typography>
    <Divider />
    <Grid container mt={1} gap={1}>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6" color={gray200}>
            Name
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

const EventDialog = () => {
  const { selectedEventId, setSelectedEventId, setSelectedEvent } =
    useSecurityEventContext();

  const { findByElasticsearchIdEvent } = useSecurityEventQuery();

  useEffect(() => {
    if (findByElasticsearchIdEvent) {
      setSelectedEvent(findByElasticsearchIdEvent);
    }
  }, [findByElasticsearchIdEvent]);

  const handleClose = () => {
    setSelectedEventId(null);
    setSelectedEvent(null);
  };

  if (!findByElasticsearchIdEvent) return <></>;

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={!!selectedEventId}
      onClose={handleClose}
    >
      <DialogTitle>
        {findByElasticsearchIdEvent?.agent.name} -{' '}
        {findByElasticsearchIdEvent?.rule.description}
      </DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <Rule event={findByElasticsearchIdEvent} />
          <Mitre event={findByElasticsearchIdEvent} />
          <Windows event={findByElasticsearchIdEvent} />
          <Vulnerability event={findByElasticsearchIdEvent} />
          <Agent agent={findByElasticsearchIdEvent.agent} />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
