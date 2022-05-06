import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AgentType } from 'modules/Shared/types';
import {
  IAlertsEvolutionOverTime,
  IAttacksByTechnique,
  ITechniquesByAgent,
  ITopTactics,
  ITopTacticsByAgent,
} from 'modules/Mitre/interfaces';

interface DashboardContextInterface {
  alertsEvolutionOverTime: IAlertsEvolutionOverTime | undefined;
  attacksByTechniques: IAttacksByTechnique | undefined;
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
  techniquesByAgent: ITechniquesByAgent | undefined;
  topTactics: ITopTactics | undefined;
  topTacticsByAgent: ITopTacticsByAgent | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const dashboardContextDefaultValues = {
  alertsEvolutionOverTime: undefined,
  attacksByTechniques: undefined,
  groupedByAgent: [],
  setGroupedByAgent: () => {},
  techniquesByAgent: undefined,
  topTactics: undefined,
  topTacticsByAgent: undefined,
  widgetsHandlersMap: {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [attacksByTechniques, setAttacksByTechnique] = useState<
    IAttacksByTechnique | undefined
  >();
  const [alertsEvolutionOverTime, setAlertsEvolutionOverTime] = useState<
    IAlertsEvolutionOverTime | undefined
  >();
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);
  const [techniquesByAgent, setTechniquesByAgent] = useState<
    ITechniquesByAgent | undefined
  >();
  const [topTactics, setTopTactics] = useState<ITopTactics | undefined>();
  const [topTacticsByAgent, setTopTechniquesByAgent] = useState<
    ITopTacticsByAgent | undefined
  >();

  const widgetsHandlersMap = {
    techniquesByAgent: setTechniquesByAgent,
    attacksByTechniques: setAttacksByTechnique,
    topTactics: setTopTactics,
    topTacticsByAgent: setTopTechniquesByAgent,
    alertsEvolutionOverTime: setAlertsEvolutionOverTime,
  };

  const value = useMemo(
    () => ({
      groupedByAgent,
      alertsEvolutionOverTime,
      attacksByTechniques,
      setGroupedByAgent,
      techniquesByAgent,
      topTactics,
      topTacticsByAgent,
      widgetsHandlersMap,
    }),
    [techniquesByAgent, attacksByTechniques, topTactics]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
