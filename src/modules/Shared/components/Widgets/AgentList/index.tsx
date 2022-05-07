import { AgentType } from 'modules/Shared/types';
import { useDashboard } from 'modules/Shared/contexts';
import { createAgentListMock } from 'modules/Shared/helpers/factories/mocks/AgentMock';
import { LoadingHandler } from 'modules/Shared/components';
import { Container } from './style';
import Agent from './Agent';

export default function AgentList() {
  const { groupedByAgent } = useDashboard();

  return (
    <Container>
      <LoadingHandler>
        {process.env.REACT_APP_ENVIRONMENT === 'production' &&
          groupedByAgent.map((agent: AgentType) => (
            <Agent key={agent.generalData.id} agent={agent} />
          ))}
        {(process.env.REACT_APP_ENVIRONMENT === 'development' || 'test') &&
          createAgentListMock(7).map((agent: AgentType) => (
            <Agent key={agent.generalData.id} agent={agent} />
          ))}
      </LoadingHandler>
    </Container>
  );
}
