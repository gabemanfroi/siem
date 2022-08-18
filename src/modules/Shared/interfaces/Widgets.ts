import { Dispatch, ReactElement, SetStateAction } from 'react';
import { IMitreWidgets } from 'modules/Mitre/interfaces/Widgets';
import { IVulnerabilityWidgets } from 'modules/Vulnerability/interfaces/Widgets';
import { ISecurityEventWidgets } from 'modules/SecurityEvent/interfaces/Widgets';
import { IIntegrityMonitoringWidgets } from 'modules/IntegrityMonitoring/interfaces/Widgets';
import { IAgentWidgets } from 'modules/Agent/interfaces/Widgets';

export interface IWidgetDefault {
  label: string;
  identifier: string;
  framework: string;
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

export interface IWidgetDefaultConfig {
  [key: string]: IWidgetDefault;
}

export interface IWidget extends IWidgetDefault {
  builder: ReactElement;
}

export interface IAutoCompleteWidget {
  identifier: string;
  label: string;
}

export interface IAllWidgets
  extends IMitreWidgets,
    IVulnerabilityWidgets,
    ISecurityEventWidgets,
    IIntegrityMonitoringWidgets,
    IAgentWidgets {}

export type WidgetsMapKeys =
  | 'alertsEvolutionOverTime'
  | 'attacksByTechnique'
  | 'techniquesByAgent'
  | 'topTactics'
  | 'topTacticsByAgent'
  | 'alertsSeverityByTime'
  | 'mostAffectedAgents'
  | 'mostCommonCVEs'
  | 'mostCommonCWEs'
  | 'topAffectedPackagesByCVEs'
  | 'alertLevelEvolution'
  | 'topMitre'
  | 'alertsEvolutionTop5Agents'
  | 'actionsTypes'
  | 'alertsByActionOverTime'
  | 'ruleDistribution'
  | 'integrityMonitoringTop5Agents'
  | 'widgetsHandler'
  | 'latestThreats'
  | 'notableAgents';

export const isWidget = (
  obj: IAutoCompleteWidget | IWidget | undefined
): obj is IWidget => obj !== undefined;

export interface IWidgetsHandler {
  [key: string]: Dispatch<SetStateAction<any>>;
}
