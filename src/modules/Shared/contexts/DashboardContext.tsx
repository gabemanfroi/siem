import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AgentType } from 'modules/Shared/types';
import { EventsByLevelType } from 'modules/Shared/types/MetricsTypes';
import { CriticalityByTimeType } from '../types/HistogramTypes';

interface OverallInterface {
  eventsByLevel: EventsByLevelType;
}

interface DashboardContextInterface {
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
  dateHistogram: CriticalityByTimeType[];
  setDateHistogram: Dispatch<SetStateAction<CriticalityByTimeType[]>>;
  overall: OverallInterface;
  setOverall: Dispatch<SetStateAction<OverallInterface>>;
}

const dashboardContextDefaultValues = {
  groupedByAgent: [],
  setGroupedByAgent: () => {},
  dateHistogram: [],
  setDateHistogram: () => {},
  overall: {
    eventsByLevel: {
      low: 0,
      medium: 0,
      high: 0,
    },
  },
  setOverall: () => {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

interface DashboardProviderInterface {
  children: ReactNode;
}

export const DashboardProvider = ({ children }: DashboardProviderInterface) => {
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);
  const [dateHistogram, setDateHistogram] = useState<CriticalityByTimeType[]>(
    []
  );
  const [overall, setOverall] = useState<OverallInterface>({
    eventsByLevel: {
      low: 0,
      medium: 0,
      high: 0,
    },
  });
  const value = useMemo(
    () => ({
      groupedByAgent,
      setGroupedByAgent,
      dateHistogram,
      setDateHistogram,
      overall,
      setOverall,
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
