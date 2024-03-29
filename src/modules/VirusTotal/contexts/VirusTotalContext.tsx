import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  IAlertsEvolutionByAgents,
  ILastScannedFiles,
  IUniqueMaliciousFilesPerAgent,
} from 'modules/VirusTotal/interfaces';
import {
  AlertsEvolutionByAgents,
  LastScannedFiles,
  UniqueMaliciousFilesPerAgent,
} from 'modules/VirusTotal/components';
import {
  IVirusTotalWidgets,
  VirusTotalWidgetsDefaultConfig,
} from 'modules/VirusTotal/interfaces/Widgets';

export const virusTotalWidgets: IVirusTotalWidgets = {
  alertsEvolutionByAgents: {
    ...VirusTotalWidgetsDefaultConfig.alertsEvolutionByAgents,
    Component: AlertsEvolutionByAgents,
  },
  lastScannedFiles: {
    ...VirusTotalWidgetsDefaultConfig.lastScannedFiles,
    Component: LastScannedFiles,
  },
  uniqueMaliciousFilesPerAgent: {
    ...VirusTotalWidgetsDefaultConfig.uniqueMaliciousFilesPerAgent,
    Component: UniqueMaliciousFilesPerAgent,
  },
};

interface IVirusTotalContext {
  alertsEvolutionByAgents: IAlertsEvolutionByAgents | undefined;
  lastScannedFiles: ILastScannedFiles | undefined;
  uniqueMaliciousFilesPerAgent: IUniqueMaliciousFilesPerAgent | undefined;
  widgetsHandler: { [key: string]: Dispatch<SetStateAction<any>> };
}

const virusTotalContextDefaultValues: IVirusTotalContext = {
  alertsEvolutionByAgents: undefined,
  lastScannedFiles: undefined,
  uniqueMaliciousFilesPerAgent: undefined,
  widgetsHandler: {},
};

const VirusTotalContext = createContext<IVirusTotalContext>(
  virusTotalContextDefaultValues
);

export const VirusTotalProvider: React.FC = ({ children }) => {
  const [alertsEvolutionByAgents, setAlertsEvolutionByAgents] = useState<
    IAlertsEvolutionByAgents | undefined
  >();
  const [lastScannedFiles, setLastScannedFiles] = useState<
    ILastScannedFiles | undefined
  >();
  const [uniqueMaliciousFilesPerAgent, setUniqueMaliciousFilesPerAgent] =
    useState<IUniqueMaliciousFilesPerAgent | undefined>();

  const widgetsHandler = {
    alertsEvolutionByAgents: setAlertsEvolutionByAgents,
    lastScannedFiles: setLastScannedFiles,
    uniqueMaliciousFilesPerAgent: setUniqueMaliciousFilesPerAgent,
  };

  const value = useMemo(
    () => ({
      alertsEvolutionByAgents,
      lastScannedFiles,
      uniqueMaliciousFilesPerAgent,
      widgetsHandler,
    }),
    [alertsEvolutionByAgents, lastScannedFiles, uniqueMaliciousFilesPerAgent]
  );

  return (
    <VirusTotalContext.Provider value={value}>
      {children}
    </VirusTotalContext.Provider>
  );
};

export const useVirusTotal = () => useContext(VirusTotalContext);
