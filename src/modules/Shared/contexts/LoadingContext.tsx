import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useIsFetching } from '@tanstack/react-query';

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

export const LoadingContext = createContext<LoadingContextInterface>(
  loadingContextDefaultValue
);

export const LoadingProvider = ({ children }: LoadingProviderInterface) => {
  const [loading, setIsLoading] = useState(false);
  const isFetching = useIsFetching();

  const isLoading = useMemo(
    () => loading || !!isFetching,
    [isFetching, loading]
  );

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
    <LoadingContext.Provider value={value}>
      {isLoading && <span className="loader" />}
      {children}
    </LoadingContext.Provider>
  );
};
