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
    options: {
      active: true,
      lg: {
        i: 'attacksByTechnique',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  techniquesByAgent: {
    label: 'Techniques by Agent',
    options: {
      active: true,
      lg: {
        i: 'techniquesByAgent',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  topTactics: {
    label: 'Top Tactics',
    options: {
      active: true,
      lg: {
        i: 'topTactics',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  topTacticsByAgent: {
    label: 'Top Tactics by Agent',
    options: {
      active: true,
      lg: {
        i: 'topTacticsByAgent',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  alertsEvolutionOverTime: {
    label: 'Alerts Evolution Over Time',
    options: {
      active: true,
      lg: {
        i: 'alertsEvolutionOverTime',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
};
