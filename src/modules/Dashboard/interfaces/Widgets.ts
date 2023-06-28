import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';

export interface IDashboardWidgets {
  summary?: IWidget;
}

export const DashboardWidgetsDefaultConfig: IWidgetDefaultConfig = {
  summary: {
    label: 'Resumo',
    identifier: 'summary',
    framework: 'dashboard',
    available: true,
    options: {
      dashboard: {
        lg: {
          i: 'summary',
          w: 3,
          h: 5,
          x: 0,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'summary',
          w: 4,
          h: 3,
          x: 3,
          y: 0,
        },
      },
    },
  },
};
