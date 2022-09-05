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
import { IEvent, IThreat } from 'modules/Shared/interfaces';
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
    builder: <LatestThreats />,
  },
  topMitre: {
    ...SecurityEventWidgetsDefaultConfig.topMitre,
    builder: <TopMitre />,
  },
  alertsEvolutionTop5Agents: {
    ...SecurityEventWidgetsDefaultConfig.alertsEvolutionTop5Agents,
    builder: <AlertsEvolutionTop5Agents />,
  },
  alertLevelEvolution: {
    ...SecurityEventWidgetsDefaultConfig.alertLevelEvolution,
    builder: <AlertLevelEvolution />,
  },
};

interface ISecurityEventContext {
  alertLevelEvolution: IAlertLevelEvolution | undefined;
  alertsEvolutionTop5Agents: IAlertsEvolutionTop5Agents | undefined;
  securityEventTop5Agents: ITop5Agents | undefined;
  topMitre: ITopMitre | undefined;
  latestThreats: IThreat[];
  widgetsHandler: { [key: string]: Dispatch<SetStateAction<any>> };
  selectedEventId: string | null;
  setSelectedEventId: Dispatch<SetStateAction<string | null>>;
  selectedEvent: IEvent | null;
  setSelectedEvent: Dispatch<SetStateAction<IEvent | null>>;
  isEventModalOpen: boolean;
  setIsEventModalOpen: Dispatch<SetStateAction<boolean>>;
}

const securityEventContextDefaultValues: ISecurityEventContext = {
  alertLevelEvolution: undefined,
  alertsEvolutionTop5Agents: undefined,
  securityEventTop5Agents: undefined,
  topMitre: undefined,
  latestThreats: [],
  widgetsHandler: {},
  selectedEventId: null,
  setSelectedEventId: () => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
  isEventModalOpen: false,
  setIsEventModalOpen: () => {},
};

const SecurityEventContext = createContext<ISecurityEventContext>(
  securityEventContextDefaultValues
);

export const SecurityEventProvider: React.FC = ({ children }) => {
  const [isEventModalOpen, setIsEventModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<null | IEvent>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
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
  const [latestThreats, setLatestThreats] = useState<IThreat[]>([]);

  const widgetsHandler = {
    alertLevelEvolution: setAlertLevelEvolution,

    alertsEvolutionTop5Agents: setAlertsEvolutionTop5Agents,
    securityEventTop5Agents: setSecurityEventTop5Agents,
    topMitre: setTopMitre,
    latestThreats: setLatestThreats,
  };

  const value = useMemo(
    () => ({
      selectedEventId,
      setSelectedEventId,
      alertLevelEvolution,
      alertsEvolutionTop5Agents,
      securityEventTop5Agents,
      topMitre,
      widgetsHandler,
      latestThreats,
      selectedEvent,
      setSelectedEvent,
      isEventModalOpen,
      setIsEventModalOpen,
    }),
    [
      selectedEventId,
      alertLevelEvolution,
      alertsEvolutionTop5Agents,
      securityEventTop5Agents,
      topMitre,
      latestThreats,
    ]
  );

  return (
    <SecurityEventContext.Provider value={value}>
      {children}
    </SecurityEventContext.Provider>
  );
};

export const useSecurityEvent = () => useContext(SecurityEventContext);
