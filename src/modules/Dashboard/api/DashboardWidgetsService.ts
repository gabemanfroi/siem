import { BaseService } from 'modules/Shared/services/BaseService';
import AxiosClient from 'modules/Shared/services/AxiosClient';
import { ROUTES } from 'modules/Shared/constants/routes';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';
import { IAgent } from 'modules/Shared/interfaces/IAgent';

const DashboardWidgetsService = () => {
  const customEndpoints = {
    getSummary: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.get(
          `${ROUTES.BRAGI.DASHBOARD_WIDGETS}/summary?initialDate=${initialDate}&finalDate=${finalDate}`
        )
      ).data,
  };

  return {
    ...BaseService<IAgent>(ROUTES.BRAGI.AGENT_WIDGETS),
    ...customEndpoints,
  };
};

export default DashboardWidgetsService();
