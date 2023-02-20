import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import {
  AnalysisWidgetDefaultConfig,
  IAnalysisWidgets,
} from 'modules/Analysis/interfaces/Widgets';
import { LatestAnalyses } from 'modules/Analysis/components';
import { IWidgetsHandler } from 'modules/Shared/interfaces/IWidgetsHandlerMap';
import ISeclabEvent from 'modules/Shared/interfaces/ISeclabEvent';

export const analysisWidgets: IAnalysisWidgets = {
  lastAnalysis: {
    ...AnalysisWidgetDefaultConfig.latestAnalyses,
    Component: LatestAnalyses,
  },
};

interface IAnalysisContext {
  latestAnalyses: ISeclabEvent[];
  setLatestAnalyses: Dispatch<SetStateAction<any[]>>;
  widgetsHandler: IWidgetsHandler;
  isAnalysisDialogOpen: boolean;
  setIsAnalysisDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedAnalysis: ISeclabEvent | null;
  setSelectedAnalysis: Dispatch<SetStateAction<ISeclabEvent | null>>;
}

const initialValues: IAnalysisContext = {
  latestAnalyses: [],
  setLatestAnalyses: () => {},
  widgetsHandler: {},
  isAnalysisDialogOpen: false,
  setIsAnalysisDialogOpen: () => {},
  selectedAnalysis: null,
  setSelectedAnalysis: () => {},
};

export const AnalysisContext = createContext<IAnalysisContext>(initialValues);

export const AnalysisProvider: FC = ({ children }) => {
  const [latestAnalyses, setLatestAnalyses] = useState<ISeclabEvent[]>([]);
  const [isAnalysisDialogOpen, setIsAnalysisDialogOpen] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState<ISeclabEvent | null>(
    null
  );
  const widgetsHandler = {
    latestAnalyses: setLatestAnalyses,
  };

  const value = useMemo(
    () => ({
      latestAnalyses,
      setLatestAnalyses,
      widgetsHandler,
      isAnalysisDialogOpen,
      setIsAnalysisDialogOpen,
      selectedAnalysis,
      setSelectedAnalysis,
    }),
    [
      latestAnalyses,
      setLatestAnalyses,
      widgetsHandler,
      isAnalysisDialogOpen,
      setIsAnalysisDialogOpen,
      selectedAnalysis,
      setSelectedAnalysis,
    ]
  );

  return (
    <AnalysisContext.Provider value={value}>
      {children}
    </AnalysisContext.Provider>
  );
};
