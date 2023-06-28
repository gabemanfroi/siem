import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AlertWithReports, IAlert } from 'modules/Shared/interfaces';
import { Choropleth } from 'modules/SecurityEvent/components/TotalEventsByCountries';
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
  choropleth: {
    ...SecurityEventWidgetsDefaultConfig.choropleth,
    Component: Choropleth,
  },
};

interface ISecurityEventContext {
  selectedAlertId: string | null;
  setSelectedAlertId: Dispatch<SetStateAction<string | null>>;
  selectedAlert: IAlert | AlertWithReports | null;
  setSelectedAlert: Dispatch<SetStateAction<IAlert | null>>;
  isAlertDialogOpen: boolean;
  setIsAlertDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const securityEventContextDefaultValues: ISecurityEventContext = {
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

  const value = useMemo(
    () => ({
      selectedAlertId,
      setSelectedAlertId,

      selectedAlert,
      setSelectedAlert,
      isAlertDialogOpen,
      setIsAlertDialogOpen,
    }),
    [selectedAlert, selectedAlertId]
  );

  return (
    <SecurityEventContext.Provider value={value}>
      {children}
    </SecurityEventContext.Provider>
  );
};

export const useSecurityEventContext = () => useContext(SecurityEventContext);
