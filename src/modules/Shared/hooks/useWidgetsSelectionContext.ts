import { useContext } from 'react';
import { WidgetsSelectionContext } from 'modules/Shared/contexts/WidgetsSelectionContext';

export const useWidgetsSelectionContext = () =>
  useContext(WidgetsSelectionContext);
