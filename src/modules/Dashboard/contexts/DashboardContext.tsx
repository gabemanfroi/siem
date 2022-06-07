import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AgentType } from 'modules/Shared/types';
import { useMitre } from 'modules/Mitre/contexts/MitreContext';
import { useVulnerability } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { useIntegrityMonitoring } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { useVirusTotal } from 'modules/VirusTotal/contexts/VirusTotalContext';
import { useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { IDashboardFilters } from 'modules/Dashboard/interfaces';
import DateFnsAdapter from '@date-io/date-fns';
import { useWidgets } from 'modules/Shared/contexts';

const dateFns = new DateFnsAdapter();

interface DashboardContextInterface {
  groupedByAgent: AgentType[];
  setGroupedByAgent: Dispatch<SetStateAction<AgentType[]>>;
  dashboardWidgetsHandlerMap: { [key: string]: Dispatch<SetStateAction<any>> };
  filters: IDashboardFilters;
  setFilters: Dispatch<SetStateAction<IDashboardFilters>>;
}

const now = new Date();

const initialFiltersState: IDashboardFilters = {
  endDate: now.getTime(),
  initialDate: dateFns.addDays(now, -7).getTime(),
  selectedWidgets: [],
};

const dashboardContextDefaultValues = {
  groupedByAgent: [],
  setGroupedByAgent: () => {},
  dashboardWidgetsHandlerMap: {},
  filters: initialFiltersState,
  setFilters: () => {},
};

const DashboardContext = createContext<DashboardContextInterface>(
  dashboardContextDefaultValues
);

export const DashboardProvider: React.FC = ({ children }) => {
  const [groupedByAgent, setGroupedByAgent] = useState<AgentType[]>([]);
  const [filters, setFilters] =
    useState<IDashboardFilters>(initialFiltersState);
  const { widgetsHandlersMap: mitreWidgetsHandlerMap } = useMitre();
  const { widgetsHandlersMap: vulnerabilityWidgetsHandlersMap } =
    useVulnerability();
  const { widgetsHandlersMap: integrityMonitoringHandlersMap } =
    useIntegrityMonitoring();
  const { widgetsHandlersMap: virusTotalHandlersMap } = useVirusTotal();
  const { widgetsHandlersMap: securityEventHandlersMap } = useSecurityEvent();

  const { selectedWidgets } = useWidgets();

  const dashboardWidgetsHandlerMap = {
    ...integrityMonitoringHandlersMap,
    ...mitreWidgetsHandlerMap,
    ...securityEventHandlersMap,
    ...vulnerabilityWidgetsHandlersMap,
    ...virusTotalHandlersMap,
  };

  useEffect(() => {
    setFilters({
      ...filters,
      selectedWidgets: selectedWidgets.map((w) => w.identifier),
    });
  }, [selectedWidgets]);

  const value = useMemo(
    () => ({
      groupedByAgent,
      setGroupedByAgent,
      dashboardWidgetsHandlerMap,
      filters,
      setFilters,
    }),
    [filters]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
