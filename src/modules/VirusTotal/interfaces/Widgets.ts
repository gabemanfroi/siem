import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface IVirusTotalWidgets {
  alertsEvolutionByAgents?: IWidget;
  lastScannedFiles?: IWidget;
  uniqueMaliciousFilesPerAgent?: IWidget;
}

export const VirusTotalWidgetsDefaultConfig = {
  alertsEvolutionByAgents: {
    label: 'Alerts Evolution by Agent',
    identifier: 'alertsEvolutionByAgents',
    options: {
      active: true,
      lg: {
        i: 'alertsEvolutionByAgents',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  lastScannedFiles: {
    label: 'Last Scanned Files',
    identifier: 'lastScannedFiles',
    options: {
      active: true,
      lg: {
        i: 'lastScannedFiles',
        w: 6,
        h: 2,
        x: 6,
        y: 0,
      },
    },
  },
  uniqueMaliciousFilesPerAgent: {
    label: 'Most Common CVEs',
    identifier: 'uniqueMaliciousFilesPerAgent',
    options: {
      active: true,
      lg: {
        i: 'uniqueMaliciousFilesPerAgent',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
};
