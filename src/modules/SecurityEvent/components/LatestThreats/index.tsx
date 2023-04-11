import { Stack } from '@mui/material';
import LatestThreat from 'modules/SecurityEvent/components/LatestThreats/Threat';
import { LoadingHandler } from 'modules/Shared/components';
import { useLatestThreatQuery } from 'modules/SecurityEvent/hooks/queries/useLatestThreatQuery';

const LatestThreats = () => {
  const { latestThreatsIsLoading, latestThreatsData } = useLatestThreatQuery();

  return (
    <LoadingHandler loading={latestThreatsIsLoading}>
      <Stack spacing={1} sx={{ overflowY: 'hidden' }}>
        {latestThreatsData.map((t) => (
          <LatestThreat key={t.id} threat={t} />
        ))}
      </Stack>
    </LoadingHandler>
  );
};

export default LatestThreats;
