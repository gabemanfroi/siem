import 'react-grid-layout/css/styles.css';
import useWidgets from 'modules/Shared/hooks/useWidgets';
import { PAGES } from 'modules/Shared/enums';
import React from 'react';

const SecurityEvent = () => {
  const Component = useWidgets(PAGES.SECURITY_EVENT);

  return <Component />;
};
export default SecurityEvent;
