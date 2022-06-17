import 'react-grid-layout/css/styles.css';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { mitreWidgets, useMitre } from 'modules/Mitre/contexts';
import { DefaultPageContainer } from 'modules/Shared/components';
import { routes } from 'modules/Shared/core/Constants';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';

const Mitre = () => {
  const { widgetsHandlersMap } = useMitre();

  return (
    <DefaultPageContainer>
      <WidgetsGrid
        widgets={getWidgetsListFromMap(mitreWidgets)}
        widgetsHandler={widgetsHandlersMap}
        apiEndpoint={routes.bragi.MITRE}
      />
    </DefaultPageContainer>
  );
};

export default Mitre;
