import { Agent } from 'modules/Shared/interfaces';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';

export const createAgentListMock = (amount: number): Agent[] => {
  const agentsToReturn: Agent[] = [];

  for (let i = 0; i < amount; i += 1) {
    agentsToReturn.push(createRandomAgent());
  }

  return agentsToReturn;
};
