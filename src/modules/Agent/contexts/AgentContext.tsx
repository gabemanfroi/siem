import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import {
  AgentWidgetsDefaultConfig,
  IAgentWidgets,
} from 'modules/Agent/interfaces/Widgets';
import { NotableAgents } from 'modules/Agent/components/NotableAgents';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

export const agentWidgets: IAgentWidgets = {
  notableAgents: {
    ...AgentWidgetsDefaultConfig.notableAgents,
    Component: NotableAgents,
  },
};

interface AgentContextInterface {
  selectedAgent: IAgent | null;
  setSelectedAgent: Dispatch<SetStateAction<IAgent | null>>;
  isAgentDialogOpen: boolean;
  setIsAgentDialogOpen: Dispatch<SetStateAction<boolean>>;
  agents: IAgent[];
  selectedAgentId: string | null;
  setSelectedAgentId: Dispatch<SetStateAction<string | null>>;
  isAgentEditMode: boolean;
  setIsAgentEditMode: Dispatch<SetStateAction<boolean>>;
}

const agentContextDefaultValues: AgentContextInterface = {
  selectedAgent: null,
  setSelectedAgent: () => {},
  isAgentDialogOpen: false,
  setIsAgentDialogOpen: () => {},
  agents: [],
  selectedAgentId: null,
  setSelectedAgentId: () => {},
  isAgentEditMode: false,
  setIsAgentEditMode: () => {},
};
export const AgentContext = createContext<AgentContextInterface>(
  agentContextDefaultValues
);

export const AgentProvider: React.FC = ({ children }) => {
  const [isAgentEditMode, setIsAgentEditMode] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<IAgent | null>(null);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [isAgentDialogOpen, setIsAgentDialogOpen] = useState<boolean>(false);
  const [agents] = useState<IAgent[]>([]);

  const providerValue = useMemo(
    () => ({
      isAgentDialogOpen,
      setIsAgentDialogOpen,
      setSelectedAgent,
      selectedAgent,
      agents,
      selectedAgentId,
      setSelectedAgentId,
      isAgentEditMode,
      setIsAgentEditMode,
    }),
    [isAgentDialogOpen, selectedAgent, agents, selectedAgentId, isAgentEditMode]
  );

  return (
    <AgentContext.Provider value={providerValue}>
      {children}
    </AgentContext.Provider>
  );
};
