import 'react-grid-layout/css/styles.css';
import { PAGES } from 'modules/Shared/enums';
import useWidgets from 'modules/Shared/hooks/useWidgets';

const IntegrityMonitoring = () => {
  const Component = useWidgets(PAGES.INTEGRITY_MONITORING);

  return <Component />;
};

export default IntegrityMonitoring;
