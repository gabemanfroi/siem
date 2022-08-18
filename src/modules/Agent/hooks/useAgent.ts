import { useContext } from 'react';
import { AgentContext } from 'modules/Agent/contexts/AgentContext';

const useAgent = () => useContext(AgentContext);

export default useAgent;
