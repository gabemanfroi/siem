import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface ISecurityEventWidgets {
  alertLevelEvolution?: IWidget;
  topMitre?: IWidget;
  alertsEvolutionTop5Agents?: IWidget;
}

export const SecurityEventWidgetsDefaultConfig = {
  alertLevelEvolution: {
    label: 'Alert Level Evolution',
    identifier: 'alertLevelEvolution',
    framework: 'securityEvent',
    options: {
      active: true,
      lg: {
        i: 'alertLevelEvolution',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  alertsEvolutionTop5Agents: {
    label: 'Alert Evolution Top 5 Agents',
    identifier: 'alertsEvolutionTop5Agents',
    framework: 'securityEvent',
    options: {
      active: true,
      lg: {
        i: 'alertsEvolutionTop5Agents',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  topMitre: {
    label: 'Top Mitre',
    identifier: 'topMitre',
    framework: 'securityEvent',
    options: {
      active: true,
      lg: {
        i: 'topMitre',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
};
