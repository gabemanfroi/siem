import React from 'react';

import { Skeleton, SkeletonProps } from '@mui/material';
import { useLoading } from 'modules/Shared/hooks';

interface LoadingHandlerPropsInterface extends SkeletonProps {
  children: React.ReactNode;
  loading?: boolean;
}

const LoadingHandler: React.FC<LoadingHandlerPropsInterface> = ({
  children,
  sx,
  variant = 'rectangular',
  loading,
  ...rest
}) => {
  const { isLoading } = useLoading();

  const getLoading = loading === undefined ? isLoading : loading;

  return (
    <>
      {getLoading && (
        <Skeleton
          sx={{ height: '100%', borderRadius: 2, width: '100%', ...sx }}
          variant={variant}
          {...rest}
        />
      )}
      {!getLoading && children}
    </>
  );
};

export default LoadingHandler;
