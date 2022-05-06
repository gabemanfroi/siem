import { ReactElement } from 'react';

export type WidgetType = {
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
};

export type WidgetsMapType = {
  mostAffectedAgents?: WidgetType;
  mostCommonCVE?: WidgetType;
  packagesByCVE?: WidgetType;
  attacksByTechnique?: WidgetType;
  techniquesByAgent?: WidgetType;
  topTactics?: WidgetType;
  topTacticsByAgent?: WidgetType;
};

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
  attacksByTechnique: {
    label: 'Attacks by Technique',
    options: {
      active: true,
      lg: {
        i: 'attacksByTechnique',
        x: 6,
        y: 3,
        w: 6,
        h: 2,
      },
    },
  },
  techniquesByAgent: {
    label: 'Techniques by Agent',
    options: {
      active: true,
      lg: {
        i: 'techniquesByAgent',
        x: 0,
        y: 5,
        w: 6,
        h: 2,
      },
    },
  },
  topTactics: {
    label: 'Top Tactics',
    options: {
      active: true,
      lg: {
        i: 'topTactics',
        x: 0,
        y: 0,
        w: 6,
        h: 2,
      },
    },
  },
  topTacticsByAgent: {
    label: 'Top Tactics by Agent',
    options: {
      active: true,
      lg: {
        i: 'topTacticsByAgent',
        x: 0,
        y: 0,
        w: 6,
        h: 2,
      },
    },
  },
};
