import { useEffect, useState } from 'react';
import { IWidget } from 'modules/Shared/interfaces/Widgets';

const useWidgetsGrid = (widgets: IWidget[], apiEndpoint: string) => {
  const [layouts, setLayouts] = useState({
    lg: widgets.map((w) => w.options.lg),
  });

  if (apiEndpoint === '/dashboard') {
    useEffect(() => {
      setLayouts({
        lg: widgets.map((w) => w.options.lg),
      });
    }, [widgets]);
  }

  return { layouts };
};

export default useWidgetsGrid;
