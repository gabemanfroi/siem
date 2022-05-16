import { IWidget } from 'modules/Shared/types/WidgetsTypes';

export interface IMitreWidgets {
  alertsEvolutionOverTime?: IWidget;
  attacksByTechnique?: IWidget;
  techniquesByAgent?: IWidget;
  topTactics?: IWidget;
  topTacticsByAgent?: IWidget;
}

export const MitreWidgetsDefaultConfig = {
  attacksByTechnique: {
    label: 'Attacks by Technique',
    identifier: 'attacksByTechnique',
    options: {
      active: true,
      lg: {
        i: 'attacksByTechnique',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  techniquesByAgent: {
    label: 'Techniques by Agent',
    identifier: 'techniquesByAgent',
    options: {
      active: true,
      lg: {
        i: 'techniquesByAgent',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  topTactics: {
    label: 'Top Tactics',
    identifier: 'topTactics',
    options: {
      active: true,
      lg: {
        i: 'topTactics',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  topTacticsByAgent: {
    label: 'Top Tactics by Agent',
    identifier: 'topTacticsByAgent',
    options: {
      active: true,
      lg: {
        i: 'topTacticsByAgent',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  alertsEvolutionOverTime: {
    label: 'Alerts Evolution Over Time',
    identifier: 'alertsEvolutionOverTime',
    options: {
      active: true,
      lg: {
        i: 'alertsEvolutionOverTime',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
};
