import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { IAgent } from 'modules/Shared/interfaces';
import {
  AgentWidgetsDefaultConfig,
  IAgentWidgets,
} from 'modules/Agent/interfaces/Widgets';
import { NotableAgents } from 'modules/Agent/components/NotableAgents';
import { INotableAgent } from 'modules/Agent/interfaces/INotableAgents';
import { IwidgetsHandler } from 'modules/Shared/interfaces/IWidgetsHandlerMap';

export const agentWidgets: IAgentWidgets = {
  notableAgents: {
    ...AgentWidgetsDefaultConfig.notableAgents,
    builder: <NotableAgents />,
  },
};

interface AgentContextInterface {
  notableAgents: INotableAgent[] | undefined;
  selectedAgent: IAgent | null;
  setSelectedAgent: Dispatch<SetStateAction<IAgent | null>>;
  isAgentModalOpen: boolean;
  setIsAgentModalOpen: Dispatch<SetStateAction<boolean>>;
  agents: IAgent[];
  widgetsHandler: IwidgetsHandler;
  selectedAgentId: string | null;
  setSelectedAgentId: Dispatch<SetStateAction<string | null>>;
  isAgentEditMode: boolean;
  setIsAgentEditMode: Dispatch<SetStateAction<boolean>>;
}

const agentContextDefaultValues: AgentContextInterface = {
  notableAgents: undefined,
  selectedAgent: null,
  setSelectedAgent: () => {},
  isAgentModalOpen: false,
  setIsAgentModalOpen: () => {},
  agents: [],
  widgetsHandler: {},
  selectedAgentId: null,
  setSelectedAgentId: () => {},
  isAgentEditMode: false,
  setIsAgentEditMode: () => {},
};
export const AgentContext = createContext<AgentContextInterface>(
  agentContextDefaultValues
);

export const AgentProvider: React.FC = ({ children }) => {
  const [notableAgents, setNotableAgents] = useState<
    INotableAgent[] | undefined
  >();

  const [isAgentEditMode, setIsAgentEditMode] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<IAgent | null>(null);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState<boolean>(false);
  const [agents] = useState<IAgent[]>([]);

  const widgetsHandler = {
    notableAgents: setNotableAgents,
  };

  const providerValue = useMemo(
    () => ({
      isAgentModalOpen,
      setIsAgentModalOpen,
      setSelectedAgent,
      selectedAgent,
      agents,
      notableAgents,
      widgetsHandler,
      selectedAgentId,
      setSelectedAgentId,
      isAgentEditMode,
      setIsAgentEditMode,
    }),
    [
      isAgentModalOpen,
      selectedAgent,
      agents,
      notableAgents,
      selectedAgentId,
      isAgentEditMode,
    ]
  );

  return (
    <AgentContext.Provider value={providerValue}>
      {children}
    </AgentContext.Provider>
  );
};
