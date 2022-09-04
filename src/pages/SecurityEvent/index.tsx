import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import {
  securityEventWidgets,
  useSecurityEvent,
} from 'modules/SecurityEvent/contexts/SecurityEventContext';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { useEffect, useMemo } from 'react';
import { ROUTES } from 'modules/Shared/constants/routes';
import DefaultLayout from 'modules/Shared/components/DefaultLayout';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';

const SecurityEvent = () => {
  const { widgetsHandler } = useSecurityEvent();
  const widgets = useMemo(
    () => getWidgetsListFromMap(securityEventWidgets),
    []
  );

  const { securityEventPageData, securityEventPageDataIsLoading } =
    useSecurityEventQuery();

  useEffect(() => {
    if (securityEventPageData) {
      const { data } = securityEventPageData;
      fillWidgetsWithData(data, widgetsHandler);
    }
  }, [securityEventPageData]);

  if (securityEventPageDataIsLoading) return <></>;

  return (
    <DefaultLayout>
      <WidgetsGrid
        widgets={widgets}
        apiEndpoint={ROUTES.BRAGI.SECURITY_EVENT}
      />
    </DefaultLayout>
  );
};

export default SecurityEvent;
