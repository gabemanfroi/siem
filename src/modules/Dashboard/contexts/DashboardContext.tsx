import React, { createContext, useContext, useMemo } from 'react';
import { useMitreContext } from 'modules/Mitre/contexts/MitreContext';
import { useVulnerability } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useIntegrityMonitoringContext } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { useSecurityEventContext } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';
import { useAgentContext } from 'modules/Agent/hooks';
import { useAnalysisContext } from 'modules/Analysis/hooks';

interface DashboardContextInterface {
  dashboardWidgetsHandler: IWidgetsHandler;
}

const dashboardContextDefaultValues = {
  dashboardWidgetsHandler: {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const { widgetsHandler: mitreWidgetsHandlerMap } = useMitreContext();
  const { widgetsHandler: vulnerabilityWidgetsHandler } = useVulnerability();
  const { widgetsHandler: integrityMonitoringHandlersMap } =
    useIntegrityMonitoringContext();
  const { widgetsHandler: virusTotalHandlersMap } = useVirusTotal();
  const { widgetsHandler: securityEventHandlersMap } =
    useSecurityEventContext();
  const { widgetsHandler: agentHandlersMap } = useAgentContext();
  const { widgetsHandler: analysisHandlerMap } = useAnalysisContext();

  const dashboardWidgetsHandler = {
    ...integrityMonitoringHandlersMap,
    ...mitreWidgetsHandlerMap,
    ...securityEventHandlersMap,
    ...vulnerabilityWidgetsHandler,
    ...virusTotalHandlersMap,
    ...agentHandlersMap,
    ...analysisHandlerMap,
  };

  const value = useMemo(
    () => ({
      dashboardWidgetsHandler,
    }),
    []
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
