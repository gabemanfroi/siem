import {
  DashboardWidgetsDefaultConfig,
  IDashboardWidgets,
} from 'modules/Dashboard/interfaces/Widgets';
import { Summary } from 'modules/Dashboard/components/Summary';

export const dashboardWidgets: IDashboardWidgets = {
  summary: {
    ...DashboardWidgetsDefaultConfig.summary,
    Component: Summary,
  },
};
