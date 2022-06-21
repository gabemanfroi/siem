import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { securityEventWidgets, useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { DefaultPageContainer } from 'modules/Shared/components';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { routes } from 'modules/Shared/core/Constants';
import { useMemo } from 'react';

const SecurityEvent = () => {
  const { widgetsHandlersMap } = useSecurityEvent();

  const widgets = useMemo(() => getWidgetsListFromMap(securityEventWidgets), [])

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={widgets}
        widgetsHandler={widgetsHandlersMap}
        apiEndpoint={routes.bragi.SECURITY_EVENT}
      />
    </DefaultPageContainer>
  );
};

export default SecurityEvent;
