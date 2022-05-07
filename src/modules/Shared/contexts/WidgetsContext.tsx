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
import { IAllWidgets, IWidget } from 'modules/Shared/types/WidgetsTypes';
import { mitreWidgets } from './MitreContext';

const widgetsMap: IAllWidgets = {
  /* mostAffectedAgents: {
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
   }, */
  ...mitreWidgets,
};

type WidgetsMapKeys = 'mostAffectedAgents' | 'mostCommonCVE' | 'packagesByCVE';

interface WidgetsContextInterface {
  defaultWidgets: IAllWidgets;
  setDefaultWidgets: Dispatch<SetStateAction<IAllWidgets>>;
  widgetsList: IWidget[];
  setWidgetsList: Dispatch<SetStateAction<IWidget[]>>;
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
    getLocalStorageConfig() || widgetsMap
  );

  const [widgetsList, setWidgetsList] = useState<IWidget[]>(
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
