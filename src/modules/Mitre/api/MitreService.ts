import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';
import AxiosClient from 'modules/Shared/services/AxiosClient';

const MitreService = () => {
  const customEndpoints = {
    getAttacksByTechnique: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/attacks_by_technique`, {
          initialDate,
          endDate,
        })
      ).data,
    getTopTactics: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/top_tactics`, {
          initialDate,
          endDate,
        })
      ).data,
    getTopTacticsByAgent: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/top_tactics_by_agent`, {
          initialDate,
          endDate,
        })
      ).data,
    getTechniquesByAgent: async ({ initialDate, endDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/techniques_by_agent`, {
          initialDate,
          endDate,
        })
      ).data,
    getAlertsEvolutionOverTime: async ({
      initialDate,
      endDate,
    }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.MITRE}/alerts_evolution_over_time`,
          {
            initialDate,
            endDate,
          }
        )
      ).data,
  };

  return {
    ...BaseService(ROUTES.BRAGI.MITRE),
    ...customEndpoints,
  };
};
export default MitreService();
