import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface ISecurityEventWidgets {
  alertLevelEvolution?: IWidget;
  topMitre?: IWidget;
  alertsEvolutionTop5Agents?: IWidget;
  latestThreats?: IWidget;
}

export const SecurityEventWidgetsDefaultConfig = {
  latestThreats: {
    label: 'Security Event - Latest Threats',
    identifier: 'latestThreats',
    framework: 'securityEvent',
    options: {
      active: true,
      lg: {
        i: 'latestThreats',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  alertLevelEvolution: {
    label: 'Security Event - Alert Level Evolution',
    identifier: 'alertLevelEvolution',
    framework: 'securityEvent',
    options: {
      active: true,
      lg: {
        i: 'alertLevelEvolution',
        w: 9,
        h: 2,
        x: 3,
        y: 2,
      },
    },
  },
  alertsEvolutionTop5Agents: {
    label: 'Security Event - Alert Evolution Top 5 Agents',
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
    label: 'Security Event - Top Mitre',
    identifier: 'topMitre',
    framework: 'securityEvent',
    options: {
      active: true,
      lg: {
        i: 'topMitre',
        w: 3,
        h: 2,
        x: 0,
        y: 3,
      },
    },
  },
};
