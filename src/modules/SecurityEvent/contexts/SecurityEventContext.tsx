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
import { AlertWithReports, IAlert, Threat } from 'modules/Shared/interfaces';
import {
  ISecurityEventWidgets,
  SecurityEventWidgetsDefaultConfig,
} from '../interfaces/Widgets';
import {
  AlertLevelEvolution,
  AlertsEvolutionTop5Agents,
  TopMitre,
} from '../components';
import LatestThreats from '../components/LatestThreats';

export const securityEventWidgets: ISecurityEventWidgets = {
  latestThreats: {
    ...SecurityEventWidgetsDefaultConfig.latestThreats,
    Component: LatestThreats,
  },
  topMitre: {
    ...SecurityEventWidgetsDefaultConfig.topMitre,
    Component: TopMitre,
  },
  alertsEvolutionTop5Agents: {
    ...SecurityEventWidgetsDefaultConfig.alertsEvolutionTop5Agents,
    Component: AlertsEvolutionTop5Agents,
  },
  alertLevelEvolution: {
    ...SecurityEventWidgetsDefaultConfig.alertLevelEvolution,
    Component: AlertLevelEvolution,
  },
};

interface ISecurityEventContext {
  alertLevelEvolution: IAlertLevelEvolution | undefined;
  alertsEvolutionTop5Agents: IAlertsEvolutionTop5Agents | undefined;
  securityEventTop5Agents: ITop5Agents | undefined;
  topMitre: ITopMitre | undefined;
  latestThreats: Threat[];
  widgetsHandler: { [key: string]: Dispatch<SetStateAction<any>> };
  selectedAlertId: string | null;
  setSelectedAlertId: Dispatch<SetStateAction<string | null>>;
  selectedAlert: IAlert | AlertWithReports | null;
  setSelectedAlert: Dispatch<SetStateAction<IAlert | null>>;
  isAlertDialogOpen: boolean;
  setIsAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const securityEventContextDefaultValues: ISecurityEventContext = {
  alertLevelEvolution: undefined,
  alertsEvolutionTop5Agents: undefined,
  securityEventTop5Agents: undefined,
  topMitre: undefined,
  latestThreats: [],
  widgetsHandler: {},
  selectedAlertId: null,
  setSelectedAlertId: () => {},
  selectedAlert: null,
  setSelectedAlert: () => {},
  isAlertDialogOpen: false,
  setIsAlertDialogOpen: () => {},
};

const SecurityEventContext = createContext<ISecurityEventContext>(
  securityEventContextDefaultValues
);

export const SecurityEventProvider: React.FC = ({ children }) => {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);
  const [selectedAlert, setSelectedAlert] = useState<
    null | IAlert | AlertWithReports
  >(null);
  const [selectedAlertId, setSelectedAlertId] = useState<string | null>(null);
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
  const [latestThreats, setLatestThreats] = useState<Threat[]>([]);

  const widgetsHandler = {
    alertLevelEvolution: setAlertLevelEvolution,
    alertsEvolutionTop5Agents: setAlertsEvolutionTop5Agents,
    securityEventTop5Agents: setSecurityEventTop5Agents,
    topMitre: setTopMitre,
    latestThreats: setLatestThreats,
  };

  const value = useMemo(
    () => ({
      selectedAlertId,
      setSelectedAlertId,
      alertLevelEvolution,
      alertsEvolutionTop5Agents,
      securityEventTop5Agents,
      topMitre,
      widgetsHandler,
      latestThreats,
      selectedAlert,
      setSelectedAlert,
      isAlertDialogOpen,
      setIsAlertDialogOpen,
    }),
    [
      selectedAlert,
      selectedAlertId,
      alertLevelEvolution,
      alertsEvolutionTop5Agents,
      securityEventTop5Agents,
      topMitre,
      latestThreats,
      setLatestThreats,
    ]
  );

  return (
    <SecurityEventContext.Provider value={value}>
      {children}
    </SecurityEventContext.Provider>
  );
};

export const useSecurityEventContext = () => useContext(SecurityEventContext);
