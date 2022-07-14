import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { AgentType } from 'modules/Shared/types';
import AgentModal from 'modules/Shared/components/Modal/AgentModal';

interface AgentContextInterface {
  selectedAgent: AgentType | null;
  setSelectedAgent: Dispatch<SetStateAction<AgentType | null>>;
  isAgentModalOpen: boolean;
  setIsAgentModalOpen: Dispatch<SetStateAction<boolean>>;
  agents: AgentType[];
}

const defaultValue = {
  selectedAgent: null,
  setSelectedAgent: () => {
  },
  isAgentModalOpen: false,
  setIsAgentModalOpen: () => {
  },
  agents: [],
};
const AgentContext = createContext<AgentContextInterface>(defaultValue);

export const AgentProvider: React.FC = ({ children }) => {
  // const { setIsLoading } = useLoading();
  const [selectedAgent, setSelectedAgent] = useState<AgentType | null>(null);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState<boolean>(false);
  const [agents] = useState<AgentType[]>([]);

  // const { data, isLoading } = useQuery('agents', AgentQueries.getAgents);
  //
  // useEffect(() => {
  //   setIsLoading(isLoading);
  // }, [isLoading]);
  //
  // useEffect(() => {
  //   if (data) setAgents(data.data);
  // }, [data]);
  //
  // useEffect(() => {
  //   console.log(agents);
  // }, [agents])

  const providerValue = useMemo(
    () => ({
      isAgentModalOpen,
      setIsAgentModalOpen,
      setSelectedAgent,
      selectedAgent,
      agents,
    }),
    [isAgentModalOpen, selectedAgent, agents],
  );

  return (
    <AgentContext.Provider value={providerValue}>
      {selectedAgent && <AgentModal />}
      {children}
    </AgentContext.Provider>
  );
};

export const useAgent = () => useContext(AgentContext);
