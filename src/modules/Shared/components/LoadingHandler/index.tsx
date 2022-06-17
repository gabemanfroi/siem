import React from 'react';
import { useLoading } from 'modules/Shared/contexts';
import { Skeleton, SkeletonProps } from '@mui/material';

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
