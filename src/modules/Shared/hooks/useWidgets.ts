import { useContext } from 'react';
import { WidgetsContext } from 'modules/Shared/contexts/WidgetsContext';

const useWidgets = () => useContext(WidgetsContext);

export default useWidgets;
