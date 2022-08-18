import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { DefaultPageContainer } from 'modules/Shared/components';
import {
  integrityMonitoringWidgets,
  useIntegrityMonitoring,
} from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { useEffect, useMemo } from 'react';
import useIntegrityMonitoringQuery from 'modules/IntegrityMonitoring/hooks/useIntegrityMonitoringQuery';
import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';

const Vulnerability = () => {
  const { widgetsHandler } = useIntegrityMonitoring();
  const widgets = useMemo(
    () => getWidgetsListFromMap(integrityMonitoringWidgets),
    []
  );

  const { integrityMonitoringPageData, integrityMonitoringPageIsLoading } =
    useIntegrityMonitoringQuery();

  useEffect(() => {
    if (integrityMonitoringPageData) {
      const { data } = integrityMonitoringPageData;
      fillWidgetsWithData(data, widgetsHandler);
    }
  }, [integrityMonitoringPageData]);

  if (integrityMonitoringPageIsLoading) return <></>;

  return (
    <DefaultPageContainer>
      <WidgetsGrid widgets={widgets} apiEndpoint="/integridade" />
    </DefaultPageContainer>
  );
};

export default Vulnerability;
