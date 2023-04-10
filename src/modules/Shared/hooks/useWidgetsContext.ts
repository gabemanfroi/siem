import { useContext } from 'react';
import { WidgetsContext } from 'modules/Shared/contexts/WidgetsContext';

const useWidgetsContext = () => useContext(WidgetsContext);

export default useWidgetsContext;
