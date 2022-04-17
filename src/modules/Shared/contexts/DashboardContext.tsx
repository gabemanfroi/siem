import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';
import { AgentType } from 'modules/Shared/types';

interface DashboardContextInterface {
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
}

const dashboardContextDefaultValues = {
  groupedByAgent: [],
  setGroupedByAgent: () => {
  },
};

const DashboardContext = createContext<DashboardContextInterface>(dashboardContextDefaultValues);

interface DashboardProviderInterface {
  children: ReactNode;
}

export const DashboardProvider = ({ children }: DashboardProviderInterface) => {
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);

  const value = useMemo(() => ({
    groupedByAgent,
    setGroupedByAgent,
  }), []);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
