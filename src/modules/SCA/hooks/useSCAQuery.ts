import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { SCAService } from 'modules/SCA/api';
import { useAgentContext } from 'modules/Agent/hooks';
import { useSCAContext } from 'modules/SCA/hooks/index';
import { IPolicyCheckItem } from 'modules/SCA/interfaces';

const useSCAquery = () => {
  const { selectedAgentId } = useAgentContext();
  const { selectedPolicy } = useSCAContext();

  const { isLoading: getPolicyByIdIsLoading, data: getPolicyByIdData } =
    useQuery(
      [QUERIES.SCA.GET_POLICY_BY_ID, selectedAgentId, selectedPolicy],
      () =>
        SCAService.dynamicGet<IPolicyCheckItem>(
          `/agent_policies/${selectedAgentId}/check/${selectedPolicy?.policyId}`
        ),
      {
        enabled: !!selectedAgentId && !!selectedPolicy,
      }
    );

  return { getPolicyByIdIsLoading, getPolicyByIdData: getPolicyByIdData || [] };
};

export default useSCAquery;
