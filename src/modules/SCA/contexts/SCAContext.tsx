import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { IPolicy } from 'modules/SCA/interfaces';

interface ISCAContext {
  isPolicyDialogOpen: boolean;
  setIsPolicyDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedPolicy: IPolicy | null;
  setSelectedPolicy: Dispatch<SetStateAction<IPolicy | null>>;
}

const scaContextDefaultValues: ISCAContext = {
  isPolicyDialogOpen: false,
  setIsPolicyDialogOpen: () => {},
  selectedPolicy: null,
  setSelectedPolicy: () => {},
};

export const SCAContext = createContext<ISCAContext>(scaContextDefaultValues);

interface SCAProviderProps {
  children: ReactNode;
}

export const SCAProvider = ({ children }: SCAProviderProps) => {
  const [isPolicyDialogOpen, setIsPolicyDialogOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<IPolicy | null>(null);

  const value = useMemo(
    () => ({
      isPolicyDialogOpen,
      setIsPolicyDialogOpen,
      selectedPolicy,
      setSelectedPolicy,
    }),
    [isPolicyDialogOpen, selectedPolicy]
  );

  return <SCAContext.Provider value={value}>{children}</SCAContext.Provider>;
};
