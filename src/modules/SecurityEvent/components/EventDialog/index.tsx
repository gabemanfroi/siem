import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import { useEffect } from 'react';
import Vulnerability from 'modules/SecurityEvent/components/EventDialog/Vulnerability';
import Windows from 'modules/SecurityEvent/components/EventDialog/Windows';
import Rule from 'modules/SecurityEvent/components/EventDialog/Rule';
import Mitre from 'modules/SecurityEvent/components/EventDialog/Mitre';

const EventDialog = () => {
  const { selectedEventId, setSelectedEventId, setSelectedEvent } =
    useSecurityEvent();

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
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
