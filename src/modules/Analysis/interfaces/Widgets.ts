import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';
import i18n from 'modules/Shared/core/i18n';

export interface IAnalysisWidgets {
  latestReports?: IWidget;
  latestSuspiciousEvents?: IWidget;
}

const { t } = i18n;

export const AnalysisWidgetDefaultConfig: IWidgetDefaultConfig = {
  latestReports: {
    label: t('Analysis - Latest Reports'),
    identifier: 'latestReports',
    framework: 'analysis',
    available: true,
    options: {
      dashboard: {
        lg: {
          i: 'latestReports',
          w: 6,
          h: 2,
          x: 6,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'latestReports',
          w: 6,
          h: 3,
          x: 0,
          y: 0,
        },
      },
    },
  },
  latestSuspiciousEvents: {
    label: t('Analysis - Latest Suspicious Events'),
    identifier: 'latestSuspiciousEvents',
    framework: 'analysis',
    available: true,
    options: {
      dashboard: {
        lg: {
          i: 'latestSuspiciousEvents',
          w: 6,
          h: 2,
          x: 0,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'latestSuspiciousEvents',
          w: 6,
          h: 3,
          x: 6,
          y: 0,
        },
      },
    },
  },
};
