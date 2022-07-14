import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface IIntegrityMonitoringWidgets {
  actionsTypes?: IWidget;
  alertsByActionOverTime?: IWidget;
  ruleDistribution?: IWidget;
  integrityMonitoringTop5Agents?: IWidget;
  widgetsHandlersMap?: IWidget;
}

export const IntegrityMonitoringWidgetsDefaultConfig = {
  actionsTypes: {
    identifier: 'actionsTypes',
    framework: 'integrityMonitoring',
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
    identifier: 'alertsByActionOverTime',
    framework: 'integrityMonitoring',
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
    identifier: 'ruleDistribution',
    framework: 'integrityMonitoring',
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
  integrityMonitoringTop5Agents: {
    identifier: 'integrityMonitoringTop5Agents',
    framework: 'integrityMonitoring',
    options: {
      active: true,
      lg: {
        i: 'integrityMonitoringTop5Agents',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
};
