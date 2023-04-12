import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';

const IntegrityMonitoringService = () => {
  const customEndpoints = {
    getTop5Agents: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.INTEGRITY_MONITORING}/top_5_agents`,
          {
            initialDate,
            endDate,
          }
        )
      ).data,
    getAlertsByActionOverTime: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.INTEGRITY_MONITORING}/alerts_by_action_over_time`,
          {
            initialDate,
            endDate,
          }
        )
      ).data,
    getActionsTypes: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.INTEGRITY_MONITORING}/actions_types`,
          {
            initialDate,
            endDate,
          }
        )
      ).data,
    getRuleDistribution: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.INTEGRITY_MONITORING}/rule_distribution`,
          {
            initialDate,
            endDate,
          }
        )
      ).data,
  };

  return {
    ...BaseService(ROUTES.BRAGI.INTEGRITY_MONITORING),
    ...customEndpoints,
  };
};

export default IntegrityMonitoringService();
