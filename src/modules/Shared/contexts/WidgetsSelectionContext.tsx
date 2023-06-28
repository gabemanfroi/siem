import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  IAllWidgets,
  IWidget,
  WidgetsMapKeys,
} from 'modules/Shared/interfaces/Widgets';
import {
  LOCAL_STORAGE_KEY,
  LOCAL_STORAGE_WIDGETS_CONFIG_NAME,
} from 'modules/Shared/core/constants';
import { securityEventWidgets } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { vulnerabilityWidgets } from 'modules/Vulnerability/contexts/VulnerabilityContext';
import { agentWidgets } from 'modules/Agent/contexts/AgentContext';
import { analysisWidgets } from 'modules/Analysis/contexts/AnalysisContext';
import { mitreWidgets } from 'modules/Mitre/interfaces/Widgets';
import { integrityMonitoringWidgets } from 'modules/IntegrityMonitoring/interfaces/Widgets';
import { dashboardWidgets } from 'modules/Dashboard/contexts/DashboardContext';

interface IWidgetsSelectionContext {
  selectedWidgetsMap: IAllWidgets;
  setSelectedWidgetsMap: Dispatch<SetStateAction<IAllWidgets>>;
  selectedWidgets: IWidget[];
  setSelectedWidgets: Dispatch<SetStateAction<IWidget[]>>;
  widgetsMap: IAllWidgets;
}

const widgetsMap: IAllWidgets = {
  ...integrityMonitoringWidgets,
  ...securityEventWidgets,
  ...mitreWidgets,
  ...vulnerabilityWidgets,
  ...agentWidgets,
  ...analysisWidgets,
  ...dashboardWidgets,
};

const defaultValue = {
  selectedWidgetsMap: {},
  setSelectedWidgetsMap: () => {},
  selectedWidgets: Object.values(widgetsMap).map((v) => v),
  setSelectedWidgets: () => {},
  widgetsMap,
  customizationMode: false,
  setCustomizationMode: () => {},
};

export const WidgetsSelectionContext =
  createContext<IWidgetsSelectionContext>(defaultValue);

interface FormattedWidgetsInterface {
  [key: string]: Record<string, unknown>;
}

const getLocalStorageConfig = (): IAllWidgets | null => {
  const localStorageStringified = localStorage.getItem(
    process.env.REACT_APP_WIDGETS_CONFIG_NAME ||
      LOCAL_STORAGE_WIDGETS_CONFIG_NAME
  );
  if (!localStorageStringified) return null;

  const localStorageWidgets = JSON.parse(localStorageStringified);
  const formattedWidgets: FormattedWidgetsInterface = {};

  Object.keys(localStorageWidgets).forEach((k) => {
    formattedWidgets[k] = {
      ...widgetsMap[k as WidgetsMapKeys],
      options: {
        ...widgetsMap[k as WidgetsMapKeys]?.options,
        lg: { ...localStorageWidgets[k] },
      },
    };
  });
  return formattedWidgets;
};

export const WidgetsSelectionProvider: FC = ({ children }) => {
  const [selectedWidgetsMap, setSelectedWidgetsMap] = useState<IAllWidgets>(
    getLocalStorageConfig() || widgetsMap
  );

  const [selectedWidgets, setSelectedWidgets] = useState<IWidget[]>(
    Object.values(selectedWidgetsMap).map((v) => v)
  );

  useEffect(() => {
    setSelectedWidgets(Object.values(selectedWidgetsMap).map((v) => v));
    if (selectedWidgets.length === 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
    }
  }, [selectedWidgetsMap]);

  const value = useMemo(
    () => ({
      selectedWidgetsMap,
      setSelectedWidgetsMap,
      selectedWidgets,
      setSelectedWidgets,
      widgetsMap,
    }),
    [selectedWidgets]
  );

  return (
    <WidgetsSelectionContext.Provider value={value}>
      {children}
    </WidgetsSelectionContext.Provider>
  );
};
