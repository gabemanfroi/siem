import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { AgentService } from 'modules/Shared/api';
import { useFilter } from 'modules/Shared/hooks';

export const useNotableAgentsQuery = () => {
  const { filters } = useFilter();
  const { data: notableAgentsData, isLoading: notableAgentsLoading } = useQuery(
    [QUERIES.AGENT.GET_NOTABLE_AGENTS, filters],
    () =>
      AgentService.getNotableAgents({
        endDate: filters.endDate! as number,
        initialDate: filters.initialDate! as number,
      }),
    {
      enabled: !!filters.initialDate && !!filters.endDate,
    }
  );
  return { notableAgentsData: notableAgentsData || [], notableAgentsLoading };
};
