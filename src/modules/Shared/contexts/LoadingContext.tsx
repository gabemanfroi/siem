import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

interface LoadingContextInterface{
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const loadingContextDefaultValue = {
  isLoading: false,
  setIsLoading: () => {}
};

interface LoadingProviderInterface{
  children: ReactNode
}

const LoadingContext = createContext<LoadingContextInterface>(loadingContextDefaultValue);

export const LoadingProvider = ({ children }: LoadingProviderInterface) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(() => ({
    isLoading,
    setIsLoading
  }), []);

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
