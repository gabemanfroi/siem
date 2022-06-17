import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { DefaultPageContainer } from 'modules/Shared/components';
import {
  integrityMonitoringWidgets,
  useIntegrityMonitoring,
} from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';

const Vulnerability = () => {
  const { widgetsHandlersMap } = useIntegrityMonitoring();

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={getWidgetsListFromMap(integrityMonitoringWidgets)}
        widgetsHandler={widgetsHandlersMap}
        apiEndpoint="/integridade"
      />
    </DefaultPageContainer>
  );
};

export default Vulnerability;
