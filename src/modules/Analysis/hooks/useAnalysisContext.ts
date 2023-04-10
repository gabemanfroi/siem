import { useContext } from 'react';
import { AnalysisContext } from 'modules/Analysis/contexts/AnalysisContext';

const useAnalysisContext = () => useContext(AnalysisContext);

export default useAnalysisContext;
