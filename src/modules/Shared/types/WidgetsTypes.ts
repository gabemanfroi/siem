import { ReactElement } from 'react';
import { IMitreWidgets } from 'modules/Mitre/interfaces/Widgets';

export interface IWidget {
  label: string;
  identifier: string;
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
