import { Skeleton } from '@mui/material';
import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import { Container } from './style';
import { OverallSecurity } from './OverallSecurity';

export default function Top() {
  const { isLoading } = useAppSelector(({ loading }) => loading);
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
