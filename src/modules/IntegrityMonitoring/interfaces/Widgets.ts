import { IWidget } from 'modules/Shared/types/WidgetsTypes';

export interface IIntegrityMonitoring {
  actionsTypes?: IWidget;
  alertsByActionOverTime?: IWidget;
  ruleDistribution?: IWidget;
  top5Agents?: IWidget;
  widgetsHandlersMap?: IWidget;
}

export const IntegrityMonitoringWidgetsDefaultConfig = {
  actionsTypes: {
    label: 'Actions Types',
    options: {
      active: true,
      lg: {
        i: 'actionsTypes',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  alertsByActionOverTime: {
    label: 'Alerts by Action Over Time',
    options: {
      active: true,
      lg: {
        i: 'alertsByActionOverTime',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  ruleDistribution: {
    label: 'Rule Distribution',
    options: {
      active: true,
      lg: {
        i: 'ruleDistribution',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  top5Agents: {
    label: 'Top 5 Agents',
    options: {
      active: true,
      lg: {
        i: 'top5Agents',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
};