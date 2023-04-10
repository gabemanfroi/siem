import { PAGES } from 'modules/Shared/enums';
import {
  securityEventWidgets,
  useSecurityEventContext,
} from 'modules/SecurityEvent/contexts/SecurityEventContext';
import useSecurityEventQuery from 'modules/SecurityEvent/hooks/queries/useSecurityEventQuery';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { withDefaultLayout } from 'modules/Shared/hocs';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import React, { useEffect, useMemo } from 'react';
import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';
import { useAnalysisContext } from 'modules/Analysis/hooks';
import useAnalysisQuery from 'modules/Analysis/hooks/queries/useAnalysisQuery';
import { analysisWidgets } from 'modules/Analysis/contexts/AnalysisContext';
import { mitreWidgets, useMitreContext } from 'modules/Mitre/contexts';
import { useMitreQuery } from 'modules/Mitre/hooks';
import {
  integrityMonitoringWidgets,
  useIntegrityMonitoringContext,
} from 'modules/IntegrityMonitoring/contexts/IntegrityMonitoringContext';
import useIntegrityMonitoringQuery from 'modules/IntegrityMonitoring/hooks/useIntegrityMonitoringQuery';
import { useDashboardContext } from 'modules/Dashboard/contexts';
import { useDashboardQuery } from 'modules/Dashboard/hooks';

type ISettingsByPage = {
  [key in keyof typeof PAGES]: {
    contextHook: any;
    queryHook: any;
    widgetsMap?: any;
  };
};

// @ts-ignore
const SETTINGS_BY_PAGE: ISettingsByPage = {
  [PAGES.SECURITY_EVENT]: {
    contextHook: useSecurityEventContext,
    queryHook: useSecurityEventQuery,
    widgetsMap: securityEventWidgets,
  },
  [PAGES.ANALYSIS]: {
    contextHook: useAnalysisContext,
    queryHook: useAnalysisQuery,
    widgetsMap: analysisWidgets,
  },
  [PAGES.MITRE]: {
    contextHook: useMitreContext,
    queryHook: useMitreQuery,
    widgetsMap: mitreWidgets,
  },
  [PAGES.INTEGRITY_MONITORING]: {
    contextHook: useIntegrityMonitoringContext,
    queryHook: useIntegrityMonitoringQuery,
    widgetsMap: integrityMonitoringWidgets,
  },
  [PAGES.DASHBOARD]: {
    contextHook: useDashboardContext,
    queryHook: useDashboardQuery,
  },
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
  const { widgetsHandler } = SETTINGS_BY_PAGE[page].contextHook();

  const widgets = useMemo(() => {
    if (page !== PAGES.DASHBOARD) {
      return getWidgetsListFromMap(SETTINGS_BY_PAGE[page].widgetsMap);
    }
    return [];
  }, []);

  const Component = withDefaultLayout(useWidgetsGrid({ widgets, page }));

  const { pageData } = SETTINGS_BY_PAGE[page].queryHook();

  useEffect(() => {
    if (pageData) {
      const { data } = pageData;
      fillWidgetsWithData({ ...data }, widgetsHandler);
    }
  }, [pageData]);

  return Component;
};

export default useWidgets;
