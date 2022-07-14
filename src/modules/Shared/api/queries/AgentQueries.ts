import { AgentType } from 'modules/Shared/types';
import { AgentService } from '../index';

const AgentQueries = () => ({
  getAgents: async () => AgentService.get<AgentType[]>()
})

export default AgentQueries()
