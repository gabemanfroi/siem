import React from 'react';

import { Skeleton, SkeletonProps } from '@mui/material';
import { useLoading } from 'modules/Shared/hooks';

interface LoadingHandlerPropsInterface extends SkeletonProps {
  children: React.ReactNode;
}

const LoadingHandler: React.FC<LoadingHandlerPropsInterface> = ({
  children,
  sx,
  variant = 'rectangular',
  ...rest
}) => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <Skeleton
          sx={{ flex: 1, borderRadius: '5px', ...sx }}
          variant={variant}
          {...rest}
        />
      )}
      {!isLoading && children}
    </>
  );
};

export default LoadingHandler;
