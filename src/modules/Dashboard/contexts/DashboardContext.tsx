import React, { createContext, useContext, useMemo } from 'react';
import { useMitre } from 'modules/Mitre/contexts/MitreContext';
import { useVulnerability } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';
import { useAgent } from 'modules/Agent/hooks';

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
  const { widgetsHandler: mitreWidgetsHandlerMap } = useMitre();
  const { widgetsHandler: vulnerabilitywidgetsHandler } = useVulnerability();
  const { widgetsHandler: integrityMonitoringHandlersMap } =
    useIntegrityMonitoring();
  const { widgetsHandler: virusTotalHandlersMap } = useVirusTotal();
  const { widgetsHandler: securityEventHandlersMap } = useSecurityEvent();
  const { widgetsHandler: agentHandlersMap } = useAgent();

  const dashboardWidgetsHandler = {
    ...integrityMonitoringHandlersMap,
    ...mitreWidgetsHandlerMap,
    ...securityEventHandlersMap,
    ...vulnerabilitywidgetsHandler,
    ...virusTotalHandlersMap,
    ...agentHandlersMap,
  };

  const value = useMemo(() => ({ dashboardWidgetsHandler }), []);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
