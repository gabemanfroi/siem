import { Skeleton } from '@mui/material';

import { AgentType } from 'modules/Shared/types';
import { useLoading, useDashboard } from 'modules/Shared/contexts';
import { createAgentListMock } from 'modules/Shared/helpers/factories/mocks/AgentMock';
import { Container } from './style';
import Agent from './Agent';

export default function AgentList() {
  const { isLoading } = useLoading();
  const { groupedByAgent } = useDashboard();

  return (
    <Container>
      {isLoading && (
        <Skeleton
          data-testid="AgentListSkeleton"
          variant="rectangular"
          sx={{ flex: 1, borderRadius: '5px' }}
          animation="wave"
        />
      )}
      {!isLoading &&
        process.env.REACT_APP_ENVIRONMENT === 'production' &&
        groupedByAgent.map((agent: AgentType) => (
          <Agent key={agent.generalData.id} agent={agent} />
        ))}
      {!isLoading &&
        process.env.REACT_APP_ENVIRONMENT === 'development' &&
        createAgentListMock(7).map((agent: AgentType) => (
          <Agent key={agent.generalData.id} agent={agent} />
        ))}
    </Container>
  );
}