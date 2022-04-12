import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
import { Skeleton } from '@mui/material';

import { AgentType } from 'modules/Shared/types';
import { Container } from './style';
import Agent from './Agent';

export default function AgentList() {
  const { groupedByAgent } = useAppSelector(({ dashboard }) => dashboard);
  const { isLoading } = useAppSelector(({ loading }) => loading);

  return (
    <Container>
      <h5>Agentes</h5>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{ flex: 1, borderRadius: '5px' }}
          animation="wave"
        />
      )}
      {!isLoading &&
        groupedByAgent.map((agent: AgentType) => (
          <Agent key={agent.generalData.id} agent={agent} />
        ))}
    </Container>
  );
}
