import React, { createContext, useContext, useMemo, useState } from 'react';

import {
  AlertsEvolutionOverTime,
  AttacksByTechniques,
  TechniquesByAgent,
  TopTactics,
  TopTacticsByAgent,
} from 'modules/Mitre/components';

import {
  IMitreWidgets,
  MitreWidgetsDefaultConfig,
} from 'modules/Mitre/interfaces/Widgets';
import {
  IAlertsEvolutionOverTime,
  IAttacksByTechnique,
  ITechniquesByAgent,
  ITopTactics,
  ITopTacticsByAgent,
} from 'modules/Mitre/interfaces';
import { IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';

export const mitreWidgets: IMitreWidgets = {
  attacksByTechnique: {
    ...MitreWidgetsDefaultConfig.attacksByTechnique,
    Component: AttacksByTechniques,
  },
  techniquesByAgent: {
    ...MitreWidgetsDefaultConfig.techniquesByAgent,
    Component: TechniquesByAgent,
  },
  topTactics: {
    ...MitreWidgetsDefaultConfig.topTactics,
    Component: TopTactics,
  },
  topTacticsByAgent: {
    ...MitreWidgetsDefaultConfig.topTacticsByAgent,
    Component: TopTacticsByAgent,
  },
  alertsEvolutionOverTime: {
    ...MitreWidgetsDefaultConfig.alertsEvolutionOverTime,
    Component: AlertsEvolutionOverTime,
  },
};

interface MitreContextInterface {
  alertsEvolutionOverTime: IAlertsEvolutionOverTime | undefined;
  attacksByTechnique: IAttacksByTechnique | undefined;
  techniquesByAgent: ITechniquesByAgent | undefined;
  topTactics: ITopTactics | undefined;
  topTacticsByAgent: ITopTacticsByAgent | undefined;
  widgetsHandler: IWidgetsHandler;
}

const mitreContextDefaultValues = {
  alertsEvolutionOverTime: undefined,
  attacksByTechnique: undefined,
  techniquesByAgent: undefined,
  topTactics: undefined,
  topTacticsByAgent: undefined,
  widgetsHandler: {},
};

const MitreContext = createContext<MitreContextInterface>(
  mitreContextDefaultValues
);

export const MitreProvider: React.FC = ({ children }) => {
  const [attacksByTechnique, setAttacksByTechnique] = useState<
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

  const widgetsHandler = {
    techniquesByAgent: setTechniquesByAgent,
    attacksByTechnique: setAttacksByTechnique,
    topTactics: setTopTactics,
    topTacticsByAgent: setTopTechniquesByAgent,
    alertsEvolutionOverTime: setAlertsEvolutionOverTime,
  };

  const value = useMemo(
    () => ({
      alertsEvolutionOverTime,
      attacksByTechnique,
      techniquesByAgent,
      topTactics,
      topTacticsByAgent,
      widgetsHandler,
    }),
    [
      alertsEvolutionOverTime,
      attacksByTechnique,
      techniquesByAgent,
      topTactics,
      topTacticsByAgent,
    ]
  );

  return (
    <MitreContext.Provider value={value}>{children}</MitreContext.Provider>
  );
};

export const useMitreContext = () => useContext(MitreContext);
