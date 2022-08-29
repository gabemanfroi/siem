import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { mitreWidgets, useMitre } from 'modules/Mitre/contexts';
import { DefaultPageContainer } from 'modules/Shared/components';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { useEffect, useMemo } from 'react';
import { ROUTES } from 'modules/Shared/constants/routes';
import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';
import { useMitreQuery } from 'modules/Mitre/hooks';

const Mitre = () => {
  const { widgetsHandler } = useMitre();

  const widgets = useMemo(() => getWidgetsListFromMap(mitreWidgets), []);

  const { mitrePageData, mitrePageDataIsLoading } = useMitreQuery();

  useEffect(() => {
    if (mitrePageData) {
      const { data } = mitrePageData;
      fillWidgetsWithData(data, widgetsHandler);
    }
  }, [mitrePageData]);

  if (mitrePageDataIsLoading) return <></>;

  return (
    <DefaultPageContainer>
      <WidgetsGrid widgets={widgets} apiEndpoint={ROUTES.BRAGI.MITRE} />
    </DefaultPageContainer>
  );
};

export default Mitre;
