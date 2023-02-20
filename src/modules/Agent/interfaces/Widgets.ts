import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';

export interface IAgentWidgets {
  notableAgents?: IWidget;
}

export const AgentWidgetsDefaultConfig: IWidgetDefaultConfig = {
  notableAgents: {
    label: 'Agent - Notable Agents',
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
