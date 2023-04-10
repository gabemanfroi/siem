import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';
import i18n from 'modules/Shared/core/i18n';

export interface ISecurityEventWidgets {
  alertLevelEvolution?: IWidget;
  topMitre?: IWidget;
  alertsEvolutionTop5Agents?: IWidget;
  latestThreats?: IWidget;
}

const { t } = i18n;
export const SecurityEventWidgetsDefaultConfig: IWidgetDefaultConfig = {
  latestThreats: {
    label: t('Security Event - Latest Threats'),
    identifier: 'latestThreats',
    framework: 'securityEvent',
    available: true,
    options: {
      dashboard: {
        lg: {
          i: 'latestThreats',
          w: 6,
          h: 2,
          x: 6,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'latestThreats',
          w: 6,
          h: 2,
          x: 0,
          y: 0,
        },
      },
    },
  },
  alertLevelEvolution: {
    label: t('Security Event - Alert Level Evolution'),
    identifier: 'alertLevelEvolution',
    framework: 'securityEvent',
    options: {
      dashboard: {
        lg: {
          i: 'latestThreats',
          w: 6,
          h: 2,
          x: 0,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'alertLevelEvolution',
          w: 9,
          h: 2,
          x: 3,
          y: 2,
        },
      },
    },
  },
  alertsEvolutionTop5Agents: {
    label: 'Security Event - Alert Evolution Top 5 Agents',
    identifier: 'alertsEvolutionTop5Agents',
    framework: 'securityEvent',
    options: {
      page: {
        lg: {
          i: 'alertsEvolutionTop5Agents',
          w: 6,
          h: 2,
          x: 6,
          y: 0,
        },
      },
      dashboard: {
        lg: {
          i: 'alertsEvolutionTop5Agents',
          w: 6,
          h: 2,
          x: 6,
          y: 0,
        },
      },
    },
  },
  topMitre: {
    label: 'Security Event - Top Mitre',
    identifier: 'topMitre',
    framework: 'securityEvent',
    options: {
      dashboard: {
        lg: {
          i: 'topMitre',
          w: 3,
          h: 2,
          x: 0,
          y: 3,
        },
        md: {
          i: 'topMitre',
          w: 6,
          h: 2,
          x: 0,
          y: 3,
        },
      },
      page: {
        lg: {
          i: 'topMitre',
          w: 3,
          h: 2,
          x: 0,
          y: 3,
        },
        md: {
          i: 'topMitre',
          w: 6,
          h: 2,
          x: 0,
          y: 3,
        },
      },
    },
  },
};
