import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface IAgentWidgets {
  notableAgents?: IWidget;
}

export const AgentWidgetsDefaultConfig = {
  notableAgents: {
    label: 'Agent - Notable Agents',
    identifier: 'notableAgents',
    framework: 'agent',
    options: {
      active: true,
      lg: {
        i: 'notableAgents',
        w: 12,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
};
