import { QUERIES } from 'modules/Shared/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { IntegrityMonitoringService } from 'modules/IntegrityMonitoring/api';
import { useFilter } from 'modules/Shared/hooks';

export const useRuleDistributionQuery = () => {
  const { filters } = useFilter();

  const { data: ruleDistributionData, isLoading: ruleDistributionIsLoading } =
    useQuery(
      [QUERIES.INTEGRITY_MONITORING.GET_RULE_DISTRIBUTION, filters],
      () =>
        IntegrityMonitoringService.getRuleDistribution({
          initialDate: filters.initialDate as number,
          finalDate: filters.finalDate as number,
        })
    );

  return {
    ruleDistributionData: ruleDistributionData || {},
    ruleDistributionIsLoading,
  };
};
