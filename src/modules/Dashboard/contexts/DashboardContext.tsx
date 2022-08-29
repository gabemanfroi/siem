import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useMitre } from 'modules/Mitre/contexts/MitreContext';
import { useVulnerability } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';
import { useAgent } from 'modules/Agent/hooks';

interface DashboardContextInterface {
  dashboardWidgetsHandler: IWidgetsHandler;
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

const dashboardContextDefaultValues = {
  dashboardWidgetsHandler: {},
  isEditMode: false,
  setIsEditMode: () => {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { widgetsHandler: mitreWidgetsHandlerMap } = useMitre();
  const { widgetsHandler: vulnerabilityWidgetsHandler } = useVulnerability();
  const { widgetsHandler: integrityMonitoringHandlersMap } =
    useIntegrityMonitoring();
  const { widgetsHandler: virusTotalHandlersMap } = useVirusTotal();
  const { widgetsHandler: securityEventHandlersMap } = useSecurityEvent();
  const { widgetsHandler: agentHandlersMap } = useAgent();

  const dashboardWidgetsHandler = {
    ...integrityMonitoringHandlersMap,
    ...mitreWidgetsHandlerMap,
    ...securityEventHandlersMap,
    ...vulnerabilityWidgetsHandler,
    ...virusTotalHandlersMap,
    ...agentHandlersMap,
  };

  const value = useMemo(
    () => ({
      dashboardWidgetsHandler,
      isEditMode,
      setIsEditMode,
    }),
    [isEditMode]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
