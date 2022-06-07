import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
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
import { integrityMonitoringWidgets } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { securityEventWidgets } from 'modules/SecurityEvent/contexts/SecurityEventContext';

const widgetsMap: IAllWidgets = {
  ...integrityMonitoringWidgets,
  ...securityEventWidgets,
  ...mitreWidgets,
  ...vulnerabilityWidgets,
};

interface WidgetsContextInterface {
  defaultWidgets: IAllWidgets;
  setDefaultWidgets: Dispatch<SetStateAction<IAllWidgets>>;
  selectedWidgets: IWidget[];
  setSelectedWidgets: Dispatch<SetStateAction<IWidget[]>>;
  // eslint-disable-next-line no-unused-vars
  saveCurrentLayout: (layouts: Layout[]) => void;
  widgetsMap: IAllWidgets;
}

const defaultValue = {
  defaultWidgets: {},
  setDefaultWidgets: () => {},
  selectedWidgets: Object.values(widgetsMap).map((v) => v),
  saveCurrentLayout: () => {},
  setSelectedWidgets: () => {},
  widgetsMap,
};

const WidgetsContext = createContext<WidgetsContextInterface>(defaultValue);

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
  const [defaultWidgets, setDefaultWidgets] = useState<IAllWidgets>(
    getLocalStorageConfig() || {}
  );

  const [selectedWidgets, setSelectedWidgets] = useState<IWidget[]>(
    Object.values(defaultWidgets).map((v) => v)
  );

  useEffect(() => {
    if (selectedWidgets.length === 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
    }
  }, [selectedWidgets]);

  const saveCurrentLayout = (layouts: Layout[]) => {
    const auxiliaryMap: { [key: string]: Layout } = {};
    layouts.forEach((l) => {
      auxiliaryMap[l.i] = l;
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(auxiliaryMap));
  };

  useEffect(() => {
    setSelectedWidgets(Object.values(defaultWidgets).map((v) => v));
  }, [defaultWidgets]);

  const providerValue = useMemo(
    () => ({
      defaultWidgets,
      setDefaultWidgets,
      selectedWidgets,
      saveCurrentLayout,
      setSelectedWidgets,
      widgetsMap,
    }),
    [defaultWidgets, saveCurrentLayout]
  );

  return (
    <WidgetsContext.Provider value={providerValue}>
      {children}
    </WidgetsContext.Provider>
  );
};

export const useWidgets = () => useContext(WidgetsContext);
