import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  IAlertLevelEvolution,
  IAlertsEvolutionTop5Agents,
  ITop5Agents,
  ITopMitre,
} from 'modules/SecurityEvent/interfaces';
import {
  ISecurityEventWidgets,
  SecurityEventWidgetsDefaultConfig,
} from '../interfaces/Widgets';
import {
  AlertLevelEvolution,
  AlertsEvolutionTop5Agents,
  TopMitre,
} from '../components';

export const securityEventWidgets: ISecurityEventWidgets = {
  topMitre: {
    ...SecurityEventWidgetsDefaultConfig.topMitre,
    builder: () => <TopMitre />,
  },
  alertsEvolutionTop5Agents: {
    ...SecurityEventWidgetsDefaultConfig.alertsEvolutionTop5Agents,
    builder: () => <AlertsEvolutionTop5Agents />,
  },
  alertLevelEvolution: {
    ...SecurityEventWidgetsDefaultConfig.alertLevelEvolution,
    builder: () => <AlertLevelEvolution />,
  },
};

interface ISecurityEventContext {
  alertLevelEvolution: IAlertLevelEvolution | undefined;
  alertsEvolutionTop5Agents: IAlertsEvolutionTop5Agents | undefined;
  securityEventTop5Agents: ITop5Agents | undefined;
  topMitre: ITopMitre | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const securityEventContextDefaultValues: ISecurityEventContext = {
  alertLevelEvolution: undefined,
  alertsEvolutionTop5Agents: undefined,
  securityEventTop5Agents: undefined,
  topMitre: undefined,
  widgetsHandlersMap: {},
};

const SecurityEventContext = createContext<ISecurityEventContext>(
  securityEventContextDefaultValues
);

export const SecurityEventProvider: React.FC = ({ children }) => {
  const [alertLevelEvolution, setAlertLevelEvolution] = useState<
    IAlertLevelEvolution | undefined
  >();
  const [alertsEvolutionTop5Agents, setAlertsEvolutionTop5Agents] = useState<
    IAlertsEvolutionTop5Agents | undefined
  >();
  const [securityEventTop5Agents, setSecurityEventTop5Agents] = useState<
    ITop5Agents | undefined
  >();
  const [topMitre, setTopMitre] = useState<ITopMitre | undefined>();

  const widgetsHandlersMap = {
    alertLevelEvolution: setAlertLevelEvolution,
    alertsEvolutionTop5Agents: setAlertsEvolutionTop5Agents,
    securityEventTop5Agents: setSecurityEventTop5Agents,
    topMitre: setTopMitre,
  };

  const value = useMemo(
    () => ({
      alertLevelEvolution,
      alertsEvolutionTop5Agents,
      securityEventTop5Agents,
      topMitre,
      widgetsHandlersMap,
    }),
    [
      alertLevelEvolution,
      alertsEvolutionTop5Agents,
      securityEventTop5Agents,
      topMitre,
    ]
  );

  return (
    <SecurityEventContext.Provider value={value}>
      {children}
    </SecurityEventContext.Provider>
  );
};

export const useSecurityEvent = () => useContext(SecurityEventContext);
