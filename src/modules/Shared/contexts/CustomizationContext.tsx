import { createContext, FC, useMemo, useState } from 'react';

interface ICustomizationContext {
  customizationMode: boolean;
  setCustomizationMode: (value: boolean) => void;
}

const defaultValue = {
  customizationMode: false,
  setCustomizationMode: () => {},
};

export const CustomizationContext =
  createContext<ICustomizationContext>(defaultValue);

export const CustomizationProvider: FC = ({ children }) => {
  const [customizationMode, setCustomizationMode] = useState(false);

  const value = useMemo(
    () => ({
      customizationMode,
      setCustomizationMode,
    }),
    [customizationMode]
  );

  return (
    <CustomizationContext.Provider value={value}>
      {children}
    </CustomizationContext.Provider>
  );
};
