import { BaseService } from 'modules/Shared/services/BaseService';
import {
  AlertWithReports,
  ICortexReport,
  Report,
} from 'modules/Shared/interfaces';
import { ROUTES } from 'modules/Shared/constants/routes';
import AxiosClient from 'modules/Shared/services/AxiosClient';

const AnalysisService = () => {
  const customEndpoints = {
    getReportsByEventId: async (eventId: string) =>
      (
        await AxiosClient.get<ICortexReport[]>(
          `${ROUTES.BRAGI.ANALYSIS}/reports/get_by_event_id/${eventId}`
        )
      ).data,
    analyzeByElasticsearchId: async (alertId: string) => {
      await AxiosClient.post(
        `${ROUTES.BRAGI.ANALYSIS}/analyze_by_elasticsearch_id/${alertId}`
      );
    },
    getReportByJobId: async (jobId: string) =>
      (
        await AxiosClient.get<Report>(
          `${ROUTES.BRAGI.ANALYSIS}/reports/get_by_job_id/${jobId}`
        )
      ).data,
  };
  return {
    ...BaseService<AlertWithReports>(ROUTES.BRAGI.ANALYSIS),
    ...customEndpoints,
  };
};

export default AnalysisService();
