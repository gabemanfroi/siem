import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface LoadingContextInterface {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const loadingContextDefaultValue = {
  isLoading: false,
  setIsLoading: () => {},
};

interface LoadingProviderInterface {
  children: ReactNode;
}

const LoadingContext = createContext<LoadingContextInterface>(
  loadingContextDefaultValue
);

export const LoadingProvider = ({ children }: LoadingProviderInterface) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (process.env.REACT_APP_ENVIRONMENT === 'local') {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
