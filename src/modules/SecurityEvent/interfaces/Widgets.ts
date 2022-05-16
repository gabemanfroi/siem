import { IWidget } from 'modules/Shared/types/WidgetsTypes';

export interface ISecurityEventWidgets {
  alertLevelEvolution?: IWidget;
  topMitre?: IWidget;
  alertsEvolutionTop5Agents?: IWidget;
}

export const SecurityEventWidgetsDefaultConfig = {
  alertLevelEvolution: {
    label: 'Alert Level Evolution',
    identifier: 'alertLevelEvolution',
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
