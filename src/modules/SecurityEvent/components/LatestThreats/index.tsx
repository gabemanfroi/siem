import { Stack } from '@mui/material';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import Threat from 'modules/SecurityEvent/components/LatestThreats/Threat';

const LatestThreats = () => {
  const { latestThreats } = useSecurityEvent();

  return (
    <Stack spacing={1} sx={{ overflowY: 'hidden' }}>
      {latestThreats.map((t) => (
        <Threat key={t.id} threat={t} />
      ))}
    </Stack>
  );
};

export default LatestThreats;
