import { PAGES } from 'modules/Shared/enums';
import useWidgets from 'modules/Shared/hooks/useWidgets';

const Analysis = () => {
  const Component = useWidgets(PAGES.ANALYSIS);

  return <Component />;
};

export default Analysis;
