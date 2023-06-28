import { useFilter } from 'modules/Shared/hooks';
import { QUERIES } from 'modules/Shared/constants/queries';
import SecurityEventService from 'modules/SecurityEvent/api/SecurityEventService';
import { useQuery } from '@tanstack/react-query';

export const useTotalEventsByCountries = () => {
  const { filters } = useFilter();
  const {
    data: totalEventsByCountriesData,
    isLoading: totalEventsByCountriesLoading,
  } = useQuery(
    [QUERIES.SECURITY_EVENT.GET_TOTAL_EVENTS_BY_COUNTRIES, filters],
    () =>
      SecurityEventService.getTotalEventsByCountries({
        finalDate: filters.finalDate! as number,
        initialDate: filters.initialDate! as number,
      })
  );
  return {
    totalEventsByCountriesData: totalEventsByCountriesData || [],
    totalEventsByCountriesLoading,
  };
};
