import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { useFilter } from 'modules/Shared/hooks';
import AgentWidgetsService from 'modules/Agent/api/AgentWidgetsService';

export const useNotableAgentsQuery = () => {
  const { filters } = useFilter();
  const { data: notableAgentsData, isLoading: notableAgentsLoading } = useQuery(
    [QUERIES.WIDGETS.AGENT, filters],
    () =>
      AgentWidgetsService.getNotableAgents({
        finalDate: filters.finalDate as number,
        initialDate: filters.initialDate! as number,
      })
  );
  return { notableAgentsData: notableAgentsData || [], notableAgentsLoading };
};
