import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';

export interface IIntegrityMonitoringWidgets {
  actionsTypes?: IWidget;
  alertsByActionOverTime?: IWidget;
  ruleDistribution?: IWidget;
  integrityMonitoringTop5Agents?: IWidget;
  widgetsHandler?: IWidget;
}

export const IntegrityMonitoringWidgetsDefaultConfig: IWidgetDefaultConfig = {
  actionsTypes: {
    label: 'Integrity Monitoring - Actions Types',
    identifier: 'actionsTypes',
    framework: 'integrityMonitoring',
    options: {
      active: true,
      lg: {
        i: 'actionsTypes',
        w: 3,
        h: 2,
        x: 0,
        y: 3,
      },
    },
  },
  alertsByActionOverTime: {
    label: 'Integrity Monitoring - Alerts By Action Over Time',
    identifier: 'alertsByActionOverTime',
    framework: 'integrityMonitoring',
    options: {
      active: true,
      lg: {
        i: 'alertsByActionOverTime',
        w: 9,
        h: 2,
        x: 3,
        y: 0,
      },
    },
  },
  ruleDistribution: {
    label: 'Integrity Monitoring - Rule Distribution',
    identifier: 'ruleDistribution',
    framework: 'integrityMonitoring',
    options: {
      active: true,
      lg: {
        i: 'ruleDistribution',
        w: 3,
        h: 2,
        x: 3,
        y: 3,
      },
    },
  },
  integrityMonitoringTop5Agents: {
    label: 'Integrity Monitoring - Top 5 Agents',
    identifier: 'integrityMonitoringTop5Agents',
    framework: 'integrityMonitoring',
    options: {
      active: true,
      lg: {
        i: 'integrityMonitoringTop5Agents',
        w: 3,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
};
