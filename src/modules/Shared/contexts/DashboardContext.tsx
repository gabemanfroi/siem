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
  IAttacksByTechnique,
  ITechniquesByAgent,
  ITopTactics,
  ITopTacticsByAgent,
} from 'modules/Mitre/interfaces';

interface DashboardContextInterface {
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
  techniquesByAgent: ITechniquesByAgent | undefined;
  attacksByTechniques: IAttacksByTechnique | undefined;
  topTactics: ITopTactics | undefined;
  topTacticsByAgent: ITopTacticsByAgent | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const dashboardContextDefaultValues = {
  groupedByAgent: [],
  setGroupedByAgent: () => {},
  techniquesByAgent: undefined,
  attacksByTechniques: undefined,
  topTactics: undefined,
  topTacticsByAgent: undefined,
  widgetsHandlersMap: {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);
  const [techniquesByAgent, setTechniquesByAgent] = useState<
    ITechniquesByAgent | undefined
  >();
  const [attacksByTechniques, setAttacksByTechnique] = useState<
    IAttacksByTechnique | undefined
  >();
  const [topTactics, setTopTactics] = useState<ITopTactics | undefined>();
  const [topTacticsByAgent, setTopTechniquesByAgent] = useState<
    ITopTacticsByAgent | undefined
  >();

  const widgetsHandlersMap = {
    techniquesByAgent: setTechniquesByAgent,
    attacksByTechniques: setAttacksByTechnique,
    topTactics: setTopTactics,
    topTechniquesByAgent: setTopTechniquesByAgent,
  };

  const value = useMemo(
    () => ({
      groupedByAgent,
      setGroupedByAgent,
      techniquesByAgent,
      attacksByTechniques,
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
