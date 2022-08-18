import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { securityEventWidgets } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { DefaultPageContainer } from 'modules/Shared/components';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { useMemo } from 'react';
import { ROUTES } from 'modules/Shared/constants/routes';

const SecurityEvent = () => {
  const widgets = useMemo(
    () => getWidgetsListFromMap(securityEventWidgets),
    []
  );

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={widgets}
        apiEndpoint={ROUTES.BRAGI.SECURITY_EVENT}
      />
    </DefaultPageContainer>
  );
};

export default SecurityEvent;
