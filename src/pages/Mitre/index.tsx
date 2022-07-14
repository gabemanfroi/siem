import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { mitreWidgets, useMitre } from 'modules/Mitre/contexts';
import { DefaultPageContainer } from 'modules/Shared/components';
import { routes } from 'modules/Shared/core/Constants';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { useMemo } from 'react';

const Mitre = () => {
  const { widgetsHandlersMap } = useMitre();

  const widgets = useMemo(() => getWidgetsListFromMap(mitreWidgets), [])

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={widgets}
        widgetsHandler={widgetsHandlersMap}
        apiEndpoint={routes.BRAGI.MITRE}
      />
    </DefaultPageContainer>
  );
};

export default Mitre;
