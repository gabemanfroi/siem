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
import {
  LatestReports,
  LatestSuspiciousEvents,
} from 'modules/Analysis/components';
import { IWidgetsHandler } from 'modules/Shared/interfaces/IWidgetsHandlerMap';
import { AlertWithReports, ICortexReport } from 'modules/Shared/interfaces';

export const analysisWidgets: IAnalysisWidgets = {
  latestReports: {
    ...AnalysisWidgetDefaultConfig.latestReports,
    Component: LatestReports,
  },
  latestSuspiciousEvents: {
    ...AnalysisWidgetDefaultConfig.latestSuspiciousEvents,
    Component: LatestSuspiciousEvents,
  },
};

interface IAnalysisContext {
  latestReports: ICortexReport[];
  setLatestReports: Dispatch<SetStateAction<ICortexReport[]>>;
  widgetsHandler: IWidgetsHandler;
  isReportDialogOpen: boolean;
  setIsReportDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedReport: ICortexReport | null;
  setSelectedReport: Dispatch<SetStateAction<ICortexReport | null>>;
  latestSuspiciousEvents: AlertWithReports[];
  setLatestSuspiciousEvents: Dispatch<SetStateAction<AlertWithReports[]>>;
}

const initialValues: IAnalysisContext = {
  latestReports: [],
  setLatestReports: () => {},
  widgetsHandler: {},
  isReportDialogOpen: false,
  setIsReportDialogOpen: () => {},
  selectedReport: null,
  setSelectedReport: () => {},
  latestSuspiciousEvents: [],
  setLatestSuspiciousEvents: () => {},
};

export const AnalysisContext = createContext<IAnalysisContext>(initialValues);

export const AnalysisProvider: FC = ({ children }) => {
  const [latestSuspiciousEvents, setLatestSuspiciousEvents] = useState<
    AlertWithReports[]
  >([]);
  const [latestReports, setLatestReports] = useState<ICortexReport[]>([]);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ICortexReport | null>(
    null
  );
  const widgetsHandler = {
    latestReports: setLatestReports,
    latestSuspiciousEvents: setLatestSuspiciousEvents,
  };

  const value = useMemo(
    () => ({
      latestReports,
      setLatestReports,
      widgetsHandler,
      isReportDialogOpen,
      setIsReportDialogOpen,
      selectedReport,
      setSelectedReport,
      setLatestSuspiciousEvents,
      latestSuspiciousEvents,
    }),
    [
      latestSuspiciousEvents,
      latestReports,
      setLatestReports,
      widgetsHandler,
      isReportDialogOpen,
      setIsReportDialogOpen,
      selectedReport,
      setSelectedReport,
    ]
  );

  return (
    <AnalysisContext.Provider value={value}>
      {children}
    </AnalysisContext.Provider>
  );
};
