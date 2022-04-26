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
import {
  CoreWidgetsConfig,
  WidgetsMapType,
  WidgetType,
} from '../types/WidgetsTypes';

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

// eslint-disable-next-line consistent-return
const getLocalStorageConfig = () => {
  const localStorageStringified = localStorage.getItem(
    process.env.REACT_APP_WIDGETS_CONFIG_NAME || '@seclab_widgets_config'
  );
  if (localStorageStringified) {
    const localStorageWidgets = JSON.parse(localStorageStringified);
    // @ts-ignore
    const formattedWidgets = {};
    Object.keys(localStorageWidgets).forEach((k) => {
      // @ts-ignore
      formattedWidgets[k] = {
        // @ts-ignore
        ...widgetsMap[k],
        options: {
          // @ts-ignore
          ...widgetsMap[k].options,
          lg: { ...localStorageWidgets[k] },
        },
      };
    });
    return formattedWidgets;
  }
};

export const WidgetsProvider: React.FC = ({ children }) => {
  const [defaultWidgets, setDefaultWidgets] = useState<WidgetsMapType>(
    // @ts-ignore
    // eslint-disable-next-line no-bitwise
    getLocalStorageConfig() || widgetsMap
  );

  const [widgetsList, setWidgetsList] = useState<WidgetType[]>(
    Object.values(defaultWidgets).map((v) => v)
  );

  const saveCurrentLayout = (layouts: Layout[]) => {
    const auxiliaryMap: { [key: string]: Layout } = {};
    layouts.forEach((l) => {
      auxiliaryMap[l.i as string] = l;
    });
    if (process.env.REACT_APP_WIDGETS_CONFIG_NAME) {
      localStorage.setItem(
        process.env.REACT_APP_WIDGETS_CONFIG_NAME,
        JSON.stringify(auxiliaryMap)
      );
    }
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
