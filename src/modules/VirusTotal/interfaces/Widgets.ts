import {
  IWidget,
  IWidgetDefaultConfig,
} from 'modules/Shared/interfaces/Widgets';

export interface IVirusTotalWidgets {
  alertsEvolutionByAgents?: IWidget;
  lastScannedFiles?: IWidget;
  uniqueMaliciousFilesPerAgent?: IWidget;
}

export const VirusTotalWidgetsDefaultConfig: IWidgetDefaultConfig = {
  alertsEvolutionByAgents: {
    label: 'VirusTotal - Alerts Evolution by Agent',
    identifier: 'alertsEvolutionByAgents',
    framework: 'virusTotal',
    options: {
      page: {
        lg: {
          i: 'alertsEvolutionByAgents',
          w: 12,
          h: 2,
          x: 0,
          y: 0,
        },
      },
      dashboard: {
        lg: {
          i: 'alertsEvolutionByAgents',
          w: 12,
          h: 2,
          x: 0,
          y: 0,
        },
      },
    },
  },
  lastScannedFiles: {
    label: 'VirusTotal - Last Scanned Files',
    identifier: 'lastScannedFiles',
    framework: 'virusTotal',
    options: {
      page: {
        lg: {
          i: 'lastScannedFiles',
          w: 12,
          h: 2,
          x: 6,
          y: 0,
        },
      },
      dashboard: {
        lg: {
          i: 'lastScannedFiles',
          w: 12,
          h: 2,
          x: 6,
          y: 0,
        },
      },
    },
  },
  uniqueMaliciousFilesPerAgent: {
    label: 'VirusTotal - Most Common CVEs',
    identifier: 'uniqueMaliciousFilesPerAgent',
    framework: 'virusTotal',
    options: {
      dashboard: {
        lg: {
          i: 'uniqueMaliciousFilesPerAgent',
          w: 12,
          h: 2,
          x: 0,
          y: 0,
        },
      },
      page: {
        lg: {
          i: 'uniqueMaliciousFilesPerAgent',
          w: 12,
          h: 2,
          x: 0,
          y: 0,
        },
      },
    },
  },
};
