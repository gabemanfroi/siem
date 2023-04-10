import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';

export interface IMitreWidgets {
  alertsEvolutionOverTime?: IWidget;
  attacksByTechnique?: IWidget;
  techniquesByAgent?: IWidget;
  topTactics?: IWidget;
  topTacticsByAgent?: IWidget;
}

export const MitreWidgetsDefaultConfig: IWidgetDefaultConfig = {
  attacksByTechnique: {
    label: 'Mitre ATT&CK - Attacks by Technique',
    identifier: 'attacksByTechnique',
    framework: 'mitre',
    options: {
      dashboard: {
        lg: {
          i: 'attacksByTechnique',
          w: 6,
          h: 2,
          x: 0,
          y: 2,
        },
      },
      page: {
        lg: {
          i: 'attacksByTechnique',
          w: 6,
          h: 2,
          x: 0,
          y: 2,
        },
      },
    },
  },
  techniquesByAgent: {
    label: 'Mitre ATT&CK - Techniques by Agent',
    identifier: 'techniquesByAgent',
    framework: 'mitre',
    options: {
      dashboard: {
        lg: {
          i: 'techniquesByAgent',
          w: 6,
          h: 2,
          x: 6,
          y: 6,
        },
      },
      page: {
        lg: {
          i: 'techniquesByAgent',
          w: 6,
          h: 2,
          x: 6,
          y: 6,
        },
      },
    },
  },
  topTactics: {
    label: 'Mitre ATT&CK - Top Tactics',
    identifier: 'topTactics',
    framework: 'mitre',
    options: {
      dashboard: {
        lg: {
          i: 'topTactics',
          w: 3,
          h: 2,
          x: 0,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'topTactics',
          w: 3,
          h: 2,
          x: 0,
          y: 0,
        },
      },
    },
  },
  topTacticsByAgent: {
    label: 'Mitre ATT&CK - Top Tactics by Agent',
    identifier: 'topTacticsByAgent',
    framework: 'mitre',
    options: {
      dashboard: {
        lg: {
          i: 'topTacticsByAgent',
          w: 9,
          h: 2,
          x: 3,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'topTacticsByAgent',
          w: 9,
          h: 2,
          x: 3,
          y: 0,
        },
      },
    },
  },
  alertsEvolutionOverTime: {
    label: 'Mitre ATT&CK - Alerts Evolution Over Time',
    identifier: 'alertsEvolutionOverTime',
    framework: 'mitre',
    options: {
      dashboard: {
        lg: {
          i: 'alertsEvolutionOverTime',
          w: 12,
          h: 2,
          x: 6,
          y: 5,
        },
      },
      page: {
        lg: {
          i: 'alertsEvolutionOverTime',
          w: 12,
          h: 2,
          x: 6,
          y: 5,
        },
      },
    },
  },
};
