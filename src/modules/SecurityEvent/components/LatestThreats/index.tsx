import { Stack } from '@mui/material';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import LatestThreat from 'modules/SecurityEvent/components/LatestThreats/Threat';

const LatestThreats = () => {
  const { latestThreats } = useSecurityEventContext();

  return (
    <Stack spacing={1} sx={{ overflowY: 'hidden' }}>
      {latestThreats.map((t) => (
        <LatestThreat key={t.id} threat={t} />
      ))}
    </Stack>
  );
};

export default LatestThreats;
