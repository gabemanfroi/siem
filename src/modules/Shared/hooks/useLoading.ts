import { useContext } from 'react';
import { LoadingContext } from 'modules/Shared/contexts/LoadingContext';

const useLoading = () => useContext(LoadingContext);

export default useLoading;
