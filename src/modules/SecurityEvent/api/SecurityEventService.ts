import AxiosClient from 'modules/Shared/services/AxiosClient';
import { IAlert, IEvent } from 'modules/Shared/interfaces';
import { ROUTES } from 'modules/Shared/constants/routes';
import { BaseService } from 'modules/Shared/services/BaseService';
import { IQueryParams } from 'modules/Shared/interfaces/IQueryParams';
import { IVulnerability } from 'modules/Vulnerability/interfaces';
import IThreat from 'modules/Shared/interfaces/IThreat';
import { ITotalEventsByCountries } from 'modules/SecurityEvent/interfaces/ITotalEventsByCountries';

const SecurityEventService = () => {
  const customEndpoints = {
    getByElasticsearchId: async ({
      elasticsearchId,
      initialDate,
      finalDate,
    }: IQueryParams) =>
      (
        await AxiosClient.get<IAlert>(
          `${ROUTES.BRAGI.SECURITY_EVENT}/get_by_elasticsearch_id/${elasticsearchId}?initial_date=${initialDate}&end_date=${finalDate}`
        )
      ).data,
    getEventsBelongingToAgent: async ({
      elasticsearchId,
      initialDate,
      finalDate,
    }: IQueryParams) =>
      (
        await AxiosClient.post<IEvent[]>(
          `${ROUTES.BRAGI.SECURITY_EVENT}/get_events_belonging_to_agent/${elasticsearchId}`,
          {
            initialDate,
            finalDate,
          }
        )
      ).data,
    getEventsByAgentAndVulnerability: async (
      agentId: string,
      vulnerability: IVulnerability
    ) =>
      (
        await AxiosClient.post<IEvent[]>(
          `${ROUTES.BRAGI.SECURITY_EVENT}/get_events_by_agent_and_vulnerability/${agentId}`,
          {
            ...vulnerability,
          }
        )
      ).data,
    getLatestThreats: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post<IThreat[]>(
          `${ROUTES.BRAGI.SECURITY_EVENT}/latest_threats`,
          { initialDate, finalDate }
        )
      ).data,
    getAlertEvolutionTop5Agents: async ({
      initialDate,
      finalDate,
    }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.SECURITY_EVENT}/alert_evolution_top_5_agents`,
          { initialDate, finalDate }
        )
      ).data,
    getTopMitre: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post(`${ROUTES.BRAGI.SECURITY_EVENT}/top_mitre`, {
          initialDate,
          finalDate,
        })
      ).data,
    getAlertLevelEvolution: async ({ initialDate, finalDate }: IQueryParams) =>
      (
        await AxiosClient.post(
          `${ROUTES.BRAGI.SECURITY_EVENT}/alert_level_evolution`,
          { initialDate, finalDate }
        )
      ).data,
    getTotalEventsByCountries: async ({
      initialDate,
      finalDate,
    }: IQueryParams) =>
      (
        await AxiosClient.get<ITotalEventsByCountries[]>(
          `${ROUTES.BRAGI.SECURITY_EVENT_WIDGETS}/total-events-by-countries?initial_date=${initialDate}&end_date=${finalDate}`
        )
      ).data,
  };

  return {
    ...BaseService<IAlert>(ROUTES.BRAGI.SECURITY_EVENT),
    ...customEndpoints,
  };
};

export default SecurityEventService();
