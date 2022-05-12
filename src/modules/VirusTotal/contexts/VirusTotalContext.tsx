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
} from '../interfaces/Widgets';

export const virusTotalWidgets: IVirusTotalWidgets = {
  alertsEvolutionByAgents: {
    ...VirusTotalWidgetsDefaultConfig.alertsEvolutionByAgents,
    builder: () => <AlertsEvolutionByAgents />,
  },
  lastScannedFiles: {
    ...VirusTotalWidgetsDefaultConfig.lastScannedFiles,
    builder: () => <LastScannedFiles />,
  },
  uniqueMaliciousFilesPerAgent: {
    ...VirusTotalWidgetsDefaultConfig.uniqueMaliciousFilesPerAgent,
    builder: () => <UniqueMaliciousFilesPerAgent />,
  },
};

interface IVirusTotalContext {
  alertsEvolutionByAgents: IAlertsEvolutionByAgents | undefined;
  lastScannedFiles: ILastScannedFiles | undefined;
  uniqueMaliciousFilesPerAgent: IUniqueMaliciousFilesPerAgent | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const virusTotalContextDefaultValues: IVirusTotalContext = {
  alertsEvolutionByAgents: undefined,
  lastScannedFiles: undefined,
  uniqueMaliciousFilesPerAgent: undefined,
  widgetsHandlersMap: {},
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

  const widgetsHandlersMap = {
    alertsEvolutionByAgents: setAlertsEvolutionByAgents,
    lastScannedFiles: setLastScannedFiles,
    uniqueMaliciousFilesPerAgent: setUniqueMaliciousFilesPerAgent,
  };

  const value = useMemo(
    () => ({
      alertsEvolutionByAgents,
      lastScannedFiles,
      uniqueMaliciousFilesPerAgent,
      widgetsHandlersMap,
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
