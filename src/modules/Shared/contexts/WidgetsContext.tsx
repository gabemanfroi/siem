import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Layout } from 'react-grid-layout';
import { LOCAL_STORAGE_WIDGETS_CONFIG_NAME } from 'modules/Shared/core/Constants';
import {
  IAllWidgets,
  IWidget,
  WidgetsMapKeys,
} from 'modules/Shared/interfaces/Widgets';
import { mitreWidgets } from 'modules/Mitre/contexts';
import { vulnerabilityWidgets } from 'modules/Vulnerability/contexts/VulnerabilityContext';

import { securityEventWidgets } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { integrityMonitoringWidgets } from 'modules/IntegrityMonitoring/contexts';
import { agentWidgets } from 'modules/Agent/contexts/AgentContext';

const widgetsMap: IAllWidgets = {
  ...integrityMonitoringWidgets,
  ...securityEventWidgets,
  ...mitreWidgets,
  ...vulnerabilityWidgets,
  ...agentWidgets,
};

interface WidgetsContextInterface {
  selectedWidgetsMap: IAllWidgets;
  setSelectedWidgetsMap: Dispatch<SetStateAction<IAllWidgets>>;
  selectedWidgets: IWidget[];
  setSelectedWidgets: Dispatch<SetStateAction<IWidget[]>>;
  // eslint-disable-next-line no-unused-vars
  saveCurrentLayout: (layouts: Layout[]) => void;
  widgetsMap: IAllWidgets;
  customizeMode: boolean;
  setCustomizeMode: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
  selectedWidgetsMap: {},
  setSelectedWidgetsMap: () => {},
  selectedWidgets: Object.values(widgetsMap).map((v) => v),
  saveCurrentLayout: () => {},
  setSelectedWidgets: () => {},
  widgetsMap,
  customizeMode: false,
  setCustomizeMode: () => {},
};

export const WidgetsContext =
  createContext<WidgetsContextInterface>(defaultValue);

interface FormattedWidgetsInterface {
  [key: string]: Record<string, unknown>;
}

const LOCAL_STORAGE_KEY =
  process.env.REACT_APP_WIDGETS_CONFIG_NAME ||
  LOCAL_STORAGE_WIDGETS_CONFIG_NAME;

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

export const WidgetsProvider: React.FC = ({ children }) => {
  const [selectedWidgetsMap, setSelectedWidgetsMap] = useState<IAllWidgets>(
    getLocalStorageConfig() || {}
  );

  const [customizeMode, setCustomizeMode] = useState(false);

  const [selectedWidgets, setSelectedWidgets] = useState<IWidget[]>(
    Object.values(selectedWidgetsMap).map((v) => v)
  );

  const saveCurrentLayout = (layouts: Layout[]) => {
    const auxiliaryMap: { [key: string]: Layout } = {};
    layouts.forEach((l) => {
      auxiliaryMap[l.i] = l;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(auxiliaryMap));
  };

  useEffect(() => {
    if (selectedWidgets.length === 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
    }
  }, [selectedWidgets]);

  useEffect(() => {
    setSelectedWidgets(Object.values(selectedWidgetsMap).map((v) => v));
  }, [selectedWidgetsMap]);

  const providerValue = useMemo(
    () => ({
      selectedWidgetsMap,
      setSelectedWidgetsMap,
      selectedWidgets,
      saveCurrentLayout,
      setSelectedWidgets,
      widgetsMap,
      customizeMode,
      setCustomizeMode,
    }),
    [selectedWidgets, customizeMode]
  );

  return (
    <WidgetsContext.Provider value={providerValue}>
      {children}
    </WidgetsContext.Provider>
  );
};
