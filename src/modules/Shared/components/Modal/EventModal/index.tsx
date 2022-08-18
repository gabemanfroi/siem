import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import { useEffect } from 'react';
import Vulnerability from 'modules/Shared/components/Modal/EventModal/Vulnerability';
import Windows from 'modules/Shared/components/Modal/EventModal/Windows';
import Rule from 'modules/Shared/components/Modal/EventModal/Rule';
import Mitre from 'modules/Shared/components/Modal/EventModal/Mitre';

const EventModal = () => {
  const { selectedEventId, setSelectedEventId, setSelectedEvent } =
    useSecurityEvent();

  const { findByElasticsearchIdEvent } = useSecurityEventQuery({
    elasticsearchId: selectedEventId!,
  });

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

export default EventModal;
