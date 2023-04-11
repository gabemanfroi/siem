import { useContext } from 'react';
import { CustomizationContext } from 'modules/Shared/contexts/CustomizationContext';

export const useCustomizationContext = () => useContext(CustomizationContext);
