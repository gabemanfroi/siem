import { IWidget } from 'modules/Shared/types/WidgetsTypes';

export interface IVirusTotalWidgets {
  alertsEvolutionByAgents?: IWidget;
  lastScannedFiles?: IWidget;
  uniqueMaliciousFilesPerAgent?: IWidget;
}

export const VirusTotalWidgetsDefaultConfig = {
  alertsEvolutionByAgents: {
    label: 'Alerts Evolution by Agent',
    options: {
      active: true,
      lg: {
        i: 'alertsEvolutionByAgent',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
  lastScannedFiles: {
    label: 'Last Scanned Files',
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
    options: {
      active: true,
      lg: {
        i: 'Unique Malicious Files Per Agent',
        w: 6,
        h: 2,
        x: 0,
        y: 0,
      },
    },
  },
};
