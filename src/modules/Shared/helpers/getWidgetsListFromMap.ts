import { IIntegrityMonitoringWidgets } from 'modules/IntegrityMonitoring/interfaces/Widgets';
import { ISecurityEventWidgets } from 'modules/SecurityEvent/interfaces/Widgets';
import { IVulnerabilityWidgets } from 'modules/Vulnerability/interfaces/Widgets';
import { IMitreWidgets } from 'modules/Mitre/interfaces/Widgets';
import { IVirusTotalWidgets } from 'modules/VirusTotal/interfaces/Widgets';
import { IAnalysisWidgets } from 'modules/Analysis/interfaces/Widgets';
import { IAllWidgets } from '../interfaces/Widgets';

export const getWidgetsListFromMap = (
  map:
    | IAllWidgets
    | IIntegrityMonitoringWidgets
    | ISecurityEventWidgets
    | IVulnerabilityWidgets
    | IMitreWidgets
    | IVirusTotalWidgets
    | IAnalysisWidgets
) => Object.values(map).map((v) => v);
