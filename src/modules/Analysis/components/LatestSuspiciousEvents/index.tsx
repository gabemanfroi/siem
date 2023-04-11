import { Stack } from '@mui/material';
import ListItem from 'modules/Shared/components/ListItem';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { LoadingHandler } from 'modules/Shared/components';
import { useLatestSuspiciousEventsQuery } from 'modules/Analysis/hooks/queries/useLatestSuspiciousEventsQuery';

const LatestSuspiciousEvents = () => {
  const { setSelectedAlert, setIsAlertDialogOpen } = useSecurityEventContext();
  const { suspiciousEventsLoading, suspiciousEventsData } =
    useLatestSuspiciousEventsQuery();

  return (
    <LoadingHandler loading={suspiciousEventsLoading}>
      <Stack spacing={1}>
        {suspiciousEventsData.map((a) => (
          <ListItem
            key={a.id}
            onClick={() => {
              setSelectedAlert(a);
              setIsAlertDialogOpen(true);
            }}
          >
            {a.event.rule.description}
          </ListItem>
        ))}
      </Stack>
    </LoadingHandler>
  );
};

export default LatestSuspiciousEvents;
