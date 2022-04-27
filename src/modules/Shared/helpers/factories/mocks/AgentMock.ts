import { AgentType } from 'modules/Shared/types';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';

const createAgentListMock = (amount: number): AgentType[] => {
  const agentsToReturn: AgentType[] = [];

  for (let i = 0; i < amount; i += 1) {
    agentsToReturn.push(createRandomAgent());
  }

  return agentsToReturn;
};

export { createAgentListMock };
