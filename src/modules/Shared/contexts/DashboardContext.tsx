import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AgentType } from 'modules/Shared/types';
import { useMitre } from './MitreContext';

interface DashboardContextInterface {
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
  dashboardWidgetsHandlerMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const dashboardContextDefaultValues = {
  groupedByAgent: [],
  setGroupedByAgent: () => {},
  dashboardWidgetsHandlerMap: {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);
  const { widgetsHandlersMap } = useMitre();

  const dashboardWidgetsHandlerMap = {
    ...widgetsHandlersMap,
  };

  const value = useMemo(
    () => ({
      groupedByAgent,
      setGroupedByAgent,
      dashboardWidgetsHandlerMap,
    }),
    []
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
