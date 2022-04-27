import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  AttacksByTechnique,
  MostAffectedAgents,
  MostCommonCVE,
  PackagesByCVE,
  TechniquesByAgent,
} from 'modules/Shared/components';
import { Layout } from 'react-grid-layout';
import { LOCAL_STORAGE_WIDGETS_CONFIG_NAME } from 'modules/Shared/core/Constants';
import {
  CoreWidgetsConfig,
  WidgetsMapType,
  WidgetType,
} from 'modules/Shared/types/WidgetsTypes';

const widgetsMap: WidgetsMapType = {
  mostAffectedAgents: {
    ...CoreWidgetsConfig.mostAffectedAgents,
    builder: () => <MostAffectedAgents />,
  },
  mostCommonCVE: {
    ...CoreWidgetsConfig.mostCommonCVE,
    builder: () => <MostCommonCVE />,
  },
  packagesByCVE: {
    ...CoreWidgetsConfig.packagesByCVE,
    builder: () => <PackagesByCVE />,
  },
  attacksByTechnique: {
    ...CoreWidgetsConfig.attacksByTechnique,
    builder: () => <AttacksByTechnique />,
  },
  techniquesByAgent: {
    ...CoreWidgetsConfig.techniquesByAgent,
    builder: () => <TechniquesByAgent />,
  },
};

type WidgetsMapKeys =
  | 'mostAffectedAgents'
  | 'mostCommonCVE'
  | 'packagesByCVE'
  | 'attacksByTechnique'
  | 'techniquesByAgent';

interface WidgetsContextInterface {
  defaultWidgets: WidgetsMapType;
  setDefaultWidgets: Dispatch<SetStateAction<WidgetsMapType>>;
  widgetsList: WidgetType[];
  setWidgetsList: Dispatch<SetStateAction<WidgetType[]>>;
  // eslint-disable-next-line no-unused-vars
  saveCurrentLayout: (layouts: Layout[]) => void;
}

const defaultValue = {
  defaultWidgets: {},
  setDefaultWidgets: () => {},
  widgetsList: Object.values(widgetsMap).map((v) => v),
  saveCurrentLayout: () => {},
  setWidgetsList: () => {},
};

const WidgetsContext = createContext<WidgetsContextInterface>(defaultValue);

interface FormattedWidgetsInterface {
  [key: string]: {};
}

const getLocalStorageConfig = (): WidgetsMapType | null => {
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
  const [defaultWidgets, setDefaultWidgets] = useState<WidgetsMapType>(
    getLocalStorageConfig() || widgetsMap
  );

  const [widgetsList, setWidgetsList] = useState<WidgetType[]>(
    Object.values(defaultWidgets).map((v) => v)
  );

  const saveCurrentLayout = (layouts: Layout[]) => {
    const auxiliaryMap: { [key: string]: Layout } = {};
    layouts.forEach((l) => {
      auxiliaryMap[l.i] = l;
    });

    localStorage.setItem(
      process.env.REACT_APP_WIDGETS_CONFIG_NAME ||
        LOCAL_STORAGE_WIDGETS_CONFIG_NAME,
      JSON.stringify(auxiliaryMap)
    );
  };

  useEffect(() => {
    setWidgetsList(Object.values(defaultWidgets).map((v) => v));
  }, [defaultWidgets]);

  const providerValue = useMemo(
    () => ({
      defaultWidgets,
      setDefaultWidgets,
      widgetsList,
      saveCurrentLayout,
      setWidgetsList,
    }),
    [defaultWidgets]
  );

  return (
    <WidgetsContext.Provider value={providerValue}>
      {children}
    </WidgetsContext.Provider>
  );
};

export const useWidgets = () => useContext(WidgetsContext);
