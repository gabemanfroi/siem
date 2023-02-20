import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';

export interface IAnalysisWidgets {
  lastAnalysis?: IWidget;
}

export const AnalysisWidgetDefaultConfig: IWidgetDefaultConfig = {
  latestAnalyses: {
    label: 'Analysis - Latest Analyses',
    identifier: 'latestAnalyses',
    framework: 'analysis',
    available: true,
    options: {
      dashboard: {
        lg: {
          i: 'latestAnalyses',
          w: 6,
          h: 2,
          x: 6,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'latestAnalyses',
          w: 6,
          h: 3,
          x: 0,
          y: 0,
        },
      },
    },
  },
};
