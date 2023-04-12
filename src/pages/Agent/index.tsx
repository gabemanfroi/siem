import { PAGES } from 'modules/Shared/enums';
import useWidgets from 'modules/Shared/hooks/useWidgets';

const Agent = () => {
  const Component = useWidgets(PAGES.AGENT);

  return <Component />;
};

export default Agent;
