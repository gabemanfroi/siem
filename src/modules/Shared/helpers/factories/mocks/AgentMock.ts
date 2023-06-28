import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

export const createAgentListMock = (amount: number): IAgent[] => {
  const agentsToReturn: IAgent[] = [];

  for (let i = 0; i < amount; i += 1) {
    agentsToReturn.push(createRandomAgent());
  }

  return agentsToReturn;
};
