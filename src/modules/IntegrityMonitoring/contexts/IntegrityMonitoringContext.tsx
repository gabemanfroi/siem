import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  IActionsTypes,
  IAlertsByActionOverTime,
  IRuleDistribution,
  ITop5Agents,
} from 'modules/IntegrityMonitoring/interfaces';
import { IWidgetsHandler } from 'modules/Shared/interfaces/IWidgetsHandlerMap';
import {
  IIntegrityMonitoringWidgets,
  IntegrityMonitoringWidgetsDefaultConfig,
} from '../interfaces/Widgets';
import {
  ActionsTypes,
  AlertsByActionOverTime,
  RuleDistribution,
  Top5Agents,
} from '../components';

export const integrityMonitoringWidgets: IIntegrityMonitoringWidgets = {
  actionsTypes: {
    ...IntegrityMonitoringWidgetsDefaultConfig.actionsTypes,
    Component: ActionsTypes,
  },
  alertsByActionOverTime: {
    ...IntegrityMonitoringWidgetsDefaultConfig.alertsByActionOverTime,
    Component: AlertsByActionOverTime,
  },
  ruleDistribution: {
    ...IntegrityMonitoringWidgetsDefaultConfig.ruleDistribution,
    Component: RuleDistribution,
  },
  integrityMonitoringTop5Agents: {
    ...IntegrityMonitoringWidgetsDefaultConfig.integrityMonitoringTop5Agents,
    Component: Top5Agents,
  },
};

interface IntegrityMonitoringContextInterface {
  actionsTypes: IActionsTypes | undefined;
  alertsByActionOverTime: IAlertsByActionOverTime | undefined;
  ruleDistribution: IRuleDistribution | undefined;
  integrityMonitoringTop5Agents: ITop5Agents | undefined;
  widgetsHandler: IWidgetsHandler;
}

const integrityMonitoringContextDefaultValues: IntegrityMonitoringContextInterface =
  {
    actionsTypes: undefined,
    alertsByActionOverTime: undefined,
    ruleDistribution: undefined,
    integrityMonitoringTop5Agents: undefined,
    widgetsHandler: {},
  };

const IntegrityMonitoringContext =
  createContext<IntegrityMonitoringContextInterface>(
    integrityMonitoringContextDefaultValues
  );

export const IntegrityMonitoringProvider: React.FC = ({ children }) => {
  const [actionsTypes, setActionsTypes] = useState<IActionsTypes | undefined>();
  const [alertsByActionOverTime, setAlertsByActionOverTime] = useState<
    IAlertsByActionOverTime | undefined
  >();
  const [ruleDistribution, setRuleDistribution] = useState<
    IRuleDistribution | undefined
  >();
  const [integrityMonitoringTop5Agents, setIntegrityMonitoringTop5Agents] =
    useState<ITop5Agents | undefined>();

  const widgetsHandler = {
    actionsTypes: setActionsTypes,
    alertsByActionOverTime: setAlertsByActionOverTime,
    ruleDistribution: setRuleDistribution,
    integrityMonitoringTop5Agents: setIntegrityMonitoringTop5Agents,
  };

  const value = useMemo(
    () => ({
      actionsTypes,
      alertsByActionOverTime,
      ruleDistribution,
      integrityMonitoringTop5Agents,
      widgetsHandler,
    }),
    [
      actionsTypes,
      alertsByActionOverTime,
      ruleDistribution,
      integrityMonitoringTop5Agents,
    ]
  );
  return (
    <IntegrityMonitoringContext.Provider value={value}>
      {children}
    </IntegrityMonitoringContext.Provider>
  );
};

export const useIntegrityMonitoringContext = () =>
  useContext(IntegrityMonitoringContext);
