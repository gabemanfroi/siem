import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { SCAService } from 'modules/SCA/api';
import { useAgent } from 'modules/Agent/hooks';
import { useSCA } from 'modules/SCA/hooks/index';

const useSCAquery = () => {
  const { selectedAgentId } = useAgent();
  const { selectedPolicy } = useSCA();

  const { isLoading: getPolicyByIdIsLoading, data: getPolicyByIdData } =
    useQuery(
      [QUERIES.SCA.GET_POLICY_BY_ID, selectedAgentId, selectedPolicy],
      () =>
        SCAService.get(
          `/agent_policies/${selectedAgentId}/check/${selectedPolicy?.policyId}`
        ),
      {
        enabled: !!selectedAgentId && !!selectedPolicy,
      }
    );

  return { getPolicyByIdIsLoading, getPolicyByIdData };
};

export default useSCAquery;
