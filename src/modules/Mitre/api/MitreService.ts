import { BaseService } from 'modules/Shared/services/BaseService';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';
import AxiosClient from 'modules/Shared/services/AxiosClient';

const MitreService = () => {
  const customEndpoints = {
    getAttacksByTechnique: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/attacks_by_technique`, {
          initialDate,
          finalDate,
        })
      ).data,
    getTopTactics: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/top_tactics`, {
          initialDate,
          finalDate,
        })
      ).data,
    getTopTacticsByAgent: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/top_tactics_by_agent`, {
          initialDate,
          finalDate,
        })
      ).data,
    getTechniquesByAgent: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.MITRE}/techniques_by_agent`, {
          initialDate,
          finalDate,
        })
      ).data,
    getAlertsEvolutionOverTime: async ({
      initialDate,
      finalDate,
    }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.MITRE}/alerts_evolution_over_time`,
          {
            initialDate,
            finalDate,
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
