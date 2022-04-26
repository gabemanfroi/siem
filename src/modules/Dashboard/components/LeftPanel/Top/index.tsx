import { Skeleton } from '@mui/material';

import { useLoading } from 'modules/Shared/contexts';
import { Container } from './style';
import { OverallSecurity } from './OverallSecurity';

export default function Top() {
  const { isLoading } = useLoading();
  return (
    <Container>
      <h1>Dashboard</h1>
      {isLoading && (
        <Skeleton
          sx={{ height: '25%', borderRadius: '5px' }}
          variant="rectangular"
          animation="pulse"
        />
      )}
      {!isLoading && <OverallSecurity />}
    </Container>
  );
}
