import { useContext } from 'react';
import { FilterContext } from 'modules/Shared/contexts/FilterContext';

const useFilter = () => useContext(FilterContext);

export default useFilter;
