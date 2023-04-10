import { Stack } from '@mui/material';
import ListItem from 'modules/Shared/components/ListItem';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { useAnalysisContext } from 'modules/Analysis/hooks';

const LatestSuspiciousEvents = () => {
  const { setSelectedAlert, setIsAlertDialogOpen } = useSecurityEventContext();
  const { latestSuspiciousEvents: alerts } = useAnalysisContext();

  return (
    <Stack spacing={1}>
      {alerts.map((a) => (
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
  );
};

export default LatestSuspiciousEvents;
