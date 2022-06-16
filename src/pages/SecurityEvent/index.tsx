import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { securityEventWidgets, useSecurityEvent } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { DefaultPageContainer } from 'modules/Shared/components';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';

const SecurityEvent = () => {
  const { widgetsHandlersMap } = useSecurityEvent();

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={getWidgetsListFromMap(securityEventWidgets)}
        widgetsHandler={widgetsHandlersMap}
        apiEndpoint="/eventos"
      />
    </DefaultPageContainer>
  );
};

export default SecurityEvent;
