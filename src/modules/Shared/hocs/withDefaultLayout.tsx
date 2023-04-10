import DefaultLayout from 'modules/Shared/components/DefaultLayout';
import React from 'react';

const withDefaultLayout = (Component: any) => () =>
  (
    <DefaultLayout>
      <Component />
    </DefaultLayout>
  );

export default withDefaultLayout;
