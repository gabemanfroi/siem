import { IAgent } from 'modules/Shared/interfaces';
import { createRandomAgent } from 'modules/Shared/helpers/factories/tests/AgentFactory';

const createAgentListMock = (amount: number): IAgent[] => {
  const agentsToReturn: IAgent[] = [];

  for (let i = 0; i < amount; i += 1) {
    agentsToReturn.push(createRandomAgent());
  }

  return agentsToReturn;
};

export { createAgentListMock };
