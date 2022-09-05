import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface IMitreWidgets {
  alertsEvolutionOverTime?: IWidget;
  attacksByTechnique?: IWidget;
  techniquesByAgent?: IWidget;
  topTactics?: IWidget;
  topTacticsByAgent?: IWidget;
}

export const MitreWidgetsDefaultConfig = {
  attacksByTechnique: {
    label: 'Mitre ATT&CK - Attacks by Technique',
    identifier: 'attacksByTechnique',
    framework: 'mitre',
    options: {
      active: true,
      lg: {
        i: 'attacksByTechnique',
        w: 12,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  techniquesByAgent: {
    label: 'Mitre ATT&CK - Techniques by Agent',
    identifier: 'techniquesByAgent',
    framework: 'mitre',
    options: {
      active: true,
      lg: {
        i: 'techniquesByAgent',
        w: 12,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  topTactics: {
    label: 'Mitre ATT&CK - Top Tactics',
    identifier: 'topTactics',
    framework: 'mitre',
    options: {
      active: true,
      lg: {
        i: 'topTactics',
        w: 12,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  topTacticsByAgent: {
    label: 'Mitre ATT&CK - Top Tactics by Agent',
    identifier: 'topTacticsByAgent',
    framework: 'mitre',
    options: {
      active: true,
      lg: {
        i: 'topTacticsByAgent',
        w: 12,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  alertsEvolutionOverTime: {
    label: 'Mitre ATT&CK - Alerts Evolution Over Time',
    identifier: 'alertsEvolutionOverTime',
    framework: 'mitre',
    options: {
      active: true,
      lg: {
        i: 'alertsEvolutionOverTime',
        w: 12,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
};
