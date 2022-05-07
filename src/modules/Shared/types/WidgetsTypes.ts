import { ReactElement } from 'react';
import { IMitreWidgets } from 'modules/Mitre/interfaces/Widgets';

export interface IWidget {
  label: string;
  builder: () => ReactElement;
  options: {
    active: boolean;
    lg: {
      i: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
}

export interface IAllWidgets extends IMitreWidgets {
  mostAffectedAgents?: IWidget;
  mostCommonCVE?: IWidget;
  packagesByCVE?: IWidget;
}

export const CoreWidgetsConfig = {
  mostAffectedAgents: {
    label: 'Most Affected Agents',
    options: {
      active: false,
      lg: {
        i: 'mostAffectedAgents',
        x: 0,
        y: 0,
        w: 6,
        h: 2,
      },
    },
  },
  mostCommonCVE: {
    label: 'Most Common CVE',
    options: {
      active: false,
      lg: {
        i: 'mostCommonCVE',
        x: 6,
        y: 0,
        w: 6,
        h: 2,
      },
    },
  },
  packagesByCVE: {
    label: 'Packages by CVE',
    options: {
      active: false,
      lg: {
        i: 'packagesByCVE',
        x: 0,
        y: 3,
        w: 6,
        h: 2,
      },
    },
  },
};

export type MitreWidgetKeys =
  | 'attacksByTechnique'
  | 'techniquesByAgent'
  | 'topTactics'
  | 'topTacticsByAgent'
  | 'alertsEvolutionOverTime';
