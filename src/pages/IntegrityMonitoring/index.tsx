import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { DefaultPageContainer } from 'modules/Shared/components';
import {
  integrityMonitoringWidgets,
  useIntegrityMonitoring,
} from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { useMemo } from 'react';

const Vulnerability = () => {
  const { widgetsHandlersMap } = useIntegrityMonitoring();

  const widgets = useMemo(() => getWidgetsListFromMap(integrityMonitoringWidgets), [])

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={widgets}
        widgetsHandler={widgetsHandlersMap}
        apiEndpoint="/integridade"
      />
    </DefaultPageContainer>
  );
};

export default Vulnerability;
