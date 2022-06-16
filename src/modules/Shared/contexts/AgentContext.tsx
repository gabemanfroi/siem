import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AgentType } from 'modules/Shared/types';
import AgentModal from 'modules/Shared/components/Modal/AgentModal';

interface AgentContextInterface {
  selectedAgent: AgentType | null;
  setSelectedAgent: Dispatch<SetStateAction<AgentType | null>>;
  isAgentModalOpen: boolean;
  setIsAgentModalOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
  selectedAgent: null,
  setSelectedAgent: () => {},
  isAgentModalOpen: false,
  setIsAgentModalOpen: () => {},
};
export const AgentContext = createContext<AgentContextInterface>(defaultValue);

export const AgentProvider: React.FC = ({ children }) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentType | null>(null);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState<boolean>(false);

  const providerValue = useMemo(
    () => ({
      isAgentModalOpen,
      setIsAgentModalOpen,
      setSelectedAgent,
      selectedAgent,
    }),
    []
  );

  return (
    <AgentContext.Provider value={providerValue}>
      {selectedAgent && <AgentModal />}
      {children}
    </AgentContext.Provider>
  );
};

export const useAgent = () => useContext(AgentContext);
