import React, { createContext, useContext, useMemo } from 'react';
import { useMitre } from 'modules/Mitre/contexts/MitreContext';
import { useVulnerability } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';

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
  const { widgetsHandlersMap: mitreWidgetsHandlerMap } = useMitre();
  const { widgetsHandlersMap: vulnerabilityWidgetsHandlersMap } =
    useVulnerability();
  const { widgetsHandlersMap: integrityMonitoringHandlersMap } =
    useIntegrityMonitoring();
  const { widgetsHandlersMap: virusTotalHandlersMap } = useVirusTotal();
  const { widgetsHandlersMap: securityEventHandlersMap } = useSecurityEvent();

  const dashboardWidgetsHandler = {
    ...integrityMonitoringHandlersMap,
    ...mitreWidgetsHandlerMap,
    ...securityEventHandlersMap,
    ...vulnerabilityWidgetsHandlersMap,
    ...virusTotalHandlersMap,
  };

  const value = useMemo(() => ({ dashboardWidgetsHandler }), []);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
