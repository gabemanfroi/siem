import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';
import i18n from 'modules/Shared/core/i18n';

export interface IAgentWidgets {
  notableAgents?: IWidget;
}

const { t } = i18n;
export const AgentWidgetsDefaultConfig: IWidgetDefaultConfig = {
  notableAgents: {
    label: t('Agent - Notable Agents'),
    identifier: 'notableAgents',
    framework: 'agent',
    available: true,
    options: {
      dashboard: {
        lg: {
          i: 'notableAgents',
          w: 6,
          h: 4,
          x: 0,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'notableAgents',
          w: 6,
          h: 4,
          x: 0,
          y: 0,
        },
      },
    },
  },
};
