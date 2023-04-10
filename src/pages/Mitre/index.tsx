import 'react-grid-layout/css/styles.css';
import { PAGES } from 'modules/Shared/enums';
import useWidgets from 'modules/Shared/hooks/useWidgets';

const Mitre = () => {
  const Component = useWidgets(PAGES.MITRE);

  return <Component />;
};

export default Mitre;
