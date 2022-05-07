import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  IAlertsEvolutionOverTime,
  IAttacksByTechnique,
  ITechniquesByAgent,
  ITopTactics,
  ITopTacticsByAgent,
} from 'modules/Mitre/interfaces';
import {
  AlertsEvolutionOverTime,
  AttacksByTechnique,
  TechniquesByAgent,
  TopTactics,
  TopTacticsByAgent,
} from 'modules/Mitre/components';

import {
  IMitreWidgets,
  MitreWidgetsDefaultConfig,
} from 'modules/Mitre/interfaces/Widgets';

export const mitreWidgets: IMitreWidgets = {
  attacksByTechnique: {
    ...MitreWidgetsDefaultConfig.attacksByTechnique,
    builder: () => <AttacksByTechnique />,
  },
  techniquesByAgent: {
    ...MitreWidgetsDefaultConfig.techniquesByAgent,
    builder: () => <TechniquesByAgent />,
  },
  topTactics: {
    ...MitreWidgetsDefaultConfig.topTactics,
    builder: () => <TopTactics />,
  },
  topTacticsByAgent: {
    ...MitreWidgetsDefaultConfig.topTacticsByAgent,
    builder: () => <TopTacticsByAgent />,
  },
  alertsEvolutionOverTime: {
    ...MitreWidgetsDefaultConfig.alertsEvolutionOverTime,
    builder: () => <AlertsEvolutionOverTime />,
  },
};

interface MitreContextInterface {
  alertsEvolutionOverTime: IAlertsEvolutionOverTime | undefined;
  attacksByTechniques: IAttacksByTechnique | undefined;
  techniquesByAgent: ITechniquesByAgent | undefined;
  topTactics: ITopTactics | undefined;
  topTacticsByAgent: ITopTacticsByAgent | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const mitreContextDefaultValues = {
  alertsEvolutionOverTime: undefined,
  attacksByTechniques: undefined,
  techniquesByAgent: undefined,
  topTactics: undefined,
  topTacticsByAgent: undefined,
  widgetsHandlersMap: {},
};

const MitreContext = createContext<MitreContextInterface>(
  mitreContextDefaultValues
);

export const MitreProvider: React.FC = ({ children }) => {
  const [attacksByTechniques, setAttacksByTechnique] = useState<
    IAttacksByTechnique | undefined
  >();
  const [alertsEvolutionOverTime, setAlertsEvolutionOverTime] = useState<
    IAlertsEvolutionOverTime | undefined
  >();
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
      alertsEvolutionOverTime,
      attacksByTechniques,
      techniquesByAgent,
      topTactics,
      topTacticsByAgent,
      widgetsHandlersMap,
    }),
    [
      alertsEvolutionOverTime,
      attacksByTechniques,
      techniquesByAgent,
      topTactics,
      topTacticsByAgent,
    ]
  );

  return (
    <MitreContext.Provider value={value}>{children}</MitreContext.Provider>
  );
};

export const useMitre = () => useContext(MitreContext);
