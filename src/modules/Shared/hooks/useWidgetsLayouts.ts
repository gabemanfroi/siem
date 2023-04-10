import { useState } from 'react';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { PAGES } from 'modules/Shared/enums';

const useWidgetsLayouts = (widgets: IWidget[], page: PAGES) => {
  const [layouts, setLayouts] = useState({
    lg: widgets.map((w) => {
      if (page === PAGES.DASHBOARD) {
        return w.options.dashboard.lg;
      }
      return w.options.page.lg;
    }),
  });

  return { layouts, setLayouts };
};

export default useWidgetsLayouts;
