import { PAGES } from 'modules/Shared/enums';
import { securityEventWidgets } from 'modules/SecurityEvent/contexts/SecurityEventContext';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { withDefaultLayout } from 'modules/Shared/hocs';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import React, { useMemo } from 'react';
import { analysisWidgets } from 'modules/Analysis/contexts/AnalysisContext';
import { mitreWidgets } from 'modules/Mitre/contexts';
import { integrityMonitoringWidgets } from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';

type ISettingsByPage = {
  [key in keyof typeof PAGES]: {
    widgetsMap?: any;
  };
};

// @ts-ignore
const SETTINGS_BY_PAGE: ISettingsByPage = {
  [PAGES.SECURITY_EVENT]: {
    widgetsMap: securityEventWidgets,
  },
  [PAGES.ANALYSIS]: {
    widgetsMap: analysisWidgets,
  },
  [PAGES.MITRE]: {
    widgetsMap: mitreWidgets,
  },
  [PAGES.INTEGRITY_MONITORING]: {
    widgetsMap: integrityMonitoringWidgets,
  },
  [PAGES.DASHBOARD]: {},
};

interface IUseWidgetsGrid {
  widgets: any;
  page: PAGES;
}

const useWidgetsGrid =
  ({ widgets, page }: IUseWidgetsGrid) =>
  () =>
    <WidgetsGrid widgets={widgets} page={page} />;

const useWidgets = (page: PAGES): React.ElementType => {
  const widgets = useMemo(() => {
    if (page !== PAGES.DASHBOARD) {
      return getWidgetsListFromMap(SETTINGS_BY_PAGE[page].widgetsMap);
    }
    return [];
  }, []);

  return withDefaultLayout(useWidgetsGrid({ widgets, page }));
};

export default useWidgets;
