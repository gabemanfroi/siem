import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AgentType } from 'modules/Shared/types';
import { useMitre } from 'modules/Mitre/contexts/MitreContext';
import { useVulnerability } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';

interface DashboardContextInterface {
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
  dashboardWidgetsHandlerMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const dashboardContextDefaultValues = {
  groupedByAgent: [],
  setGroupedByAgent: () => {},
  dashboardWidgetsHandlerMap: {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);
  const { widgetsHandlersMap: mitreWidgetsHandlerMap } = useMitre();
  const { widgetsHandlersMap: vulnerabilityWidgetsHandlersMap } =
    useVulnerability();
  const { widgetsHandlersMap: integrityMonitoringHandlersMap } =
    useIntegrityMonitoring();
  const { widgetsHandlersMap: virusTotalHandlersMap } = useVirusTotal();
  const { widgetsHandlersMap: securityEventHandlersMap } = useSecurityEvent();

  const dashboardWidgetsHandlerMap = {
    ...integrityMonitoringHandlersMap,
    ...mitreWidgetsHandlerMap,
    ...securityEventHandlersMap,
    ...vulnerabilityWidgetsHandlersMap,
    ...virusTotalHandlersMap,
  };

  const value = useMemo(
    () => ({
      groupedByAgent,
      setGroupedByAgent,
      dashboardWidgetsHandlerMap,
    }),
    []
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
