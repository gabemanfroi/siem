import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import DateFnsAdapter from '@date-io/date-fns';

const dateFns = new DateFnsAdapter();

const now = new Date();
interface IFilters {
  initialDate: number | null;
  endDate: number | null;
}

const initialFiltersState: IFilters = {
  endDate: now.getTime(),
  initialDate: dateFns.addHours(now, -1).getTime(),
};

const initialValues = {
  filters: initialFiltersState,
  setFilters: () => {},
};

interface IFilterContext {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

const FilterContext = createContext<IFilterContext>(initialValues);

export const FilterProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<IFilters>(initialFiltersState);

  const value = useMemo(() => ({ filters, setFilters }), [filters]);
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
