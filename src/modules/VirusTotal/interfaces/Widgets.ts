import { IWidget } from 'modules/Shared/interfaces/Widgets';

export interface IVirusTotalWidgets {
  alertsEvolutionByAgents?: IWidget;
  lastScannedFiles?: IWidget;
  uniqueMaliciousFilesPerAgent?: IWidget;
}

export const VirusTotalWidgetsDefaultConfig = {
  alertsEvolutionByAgents: {
    label: 'VirusTotal - Alerts Evolution by Agent',
    identifier: 'alertsEvolutionByAgents',
    framework: 'virusTotal',
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
    label: 'VirusTotal - Last Scanned Files',
    identifier: 'lastScannedFiles',
    framework: 'virusTotal',
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
    label: 'VirusTotal - Most Common CVEs',
    identifier: 'uniqueMaliciousFilesPerAgent',
    framework: 'virusTotal',
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
