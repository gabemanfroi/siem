import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  IIntegrityMonitoring,
  IntegrityMonitoringWidgetsDefaultConfig,
} from 'modules/IntegrityMonitoring/interfaces/Widgets';
import {
  IActionsTypes,
  IAlertsByActionOverTime,
  IRuleDistribution,
  ITop5Agents,
} from 'modules/IntegrityMonitoring/interfaces';
import {
  Top5Agents,
  ActionsTypes,
  AlertsByActionOverTime,
  RuleDistribution,
} from 'modules/IntegrityMonitoring/components';

export const integrityMonitoringWidgets: IIntegrityMonitoring = {
  actionsTypes: {
    ...IntegrityMonitoringWidgetsDefaultConfig.actionsTypes,
    builder: () => <ActionsTypes />,
  },
  alertsByActionOverTime: {
    ...IntegrityMonitoringWidgetsDefaultConfig.alertsByActionOverTime,
    builder: () => <AlertsByActionOverTime />,
  },
  ruleDistribution: {
    ...IntegrityMonitoringWidgetsDefaultConfig.ruleDistribution,
    builder: () => <RuleDistribution />,
  },
  integrityMonitoringTop5Agents: {
    ...IntegrityMonitoringWidgetsDefaultConfig.integrityMonitoringTop5Agents,
    builder: () => <Top5Agents />,
  },
};

interface IntegrityMonitoringContextInterface {
  actionsTypes: IActionsTypes | undefined;
  alertsByActionOverTime: IAlertsByActionOverTime | undefined;
  ruleDistribution: IRuleDistribution | undefined;
  integrityMonitoringTop5Agents: ITop5Agents | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const integrityMonitoringContextDefaultValues = {
  actionsTypes: undefined,
  alertsByActionOverTime: undefined,
  ruleDistribution: undefined,
  integrityMonitoringTop5Agents: undefined,
  widgetsHandlersMap: {},
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

  const widgetsHandlersMap = {
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
      widgetsHandlersMap,
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

export const useIntegrityMonitoring = () =>
  useContext(IntegrityMonitoringContext);