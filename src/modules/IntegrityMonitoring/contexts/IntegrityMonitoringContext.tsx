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
import Top5Agents from '../components/Top5Agents';
import ActionsTypes from '../components/ActionsTypes';
import AlertsByActionOverTime from '../components/AlertsByActionOverTime';
import RuleDistribution from '../components/RuleDistribution';

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
  top5Agents: {
    ...IntegrityMonitoringWidgetsDefaultConfig.top5Agents,
    builder: () => <Top5Agents />,
  },
};

interface IntegrityMonitoringContextInterface {
  actionsTypes: IActionsTypes | undefined;
  alertsByActionOverTime: IAlertsByActionOverTime | undefined;
  ruleDistribution: IRuleDistribution | undefined;
  top5Agents: ITop5Agents | undefined;
  widgetsHandlersMap: { [key: string]: Dispatch<SetStateAction<any>> };
}

const integrityMonitoringContextDefaultValues = {
  actionsTypes: undefined,
  alertsByActionOverTime: undefined,
  ruleDistribution: undefined,
  top5Agents: undefined,
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
  const [top5Agents, setTop5Agents] = useState<ITop5Agents | undefined>();

  const widgetsHandlersMap = {
    actionsTypes: setActionsTypes,
    alertsByActionOverTime: setAlertsByActionOverTime,
    ruleDistribution: setRuleDistribution,
    top5Agents: setTop5Agents,
  };

  const value = useMemo(
    () => ({
      actionsTypes,
      alertsByActionOverTime,
      ruleDistribution,
      top5Agents,
      widgetsHandlersMap,
    }),
    [actionsTypes, alertsByActionOverTime, ruleDistribution, top5Agents]
  );
  return (
    <IntegrityMonitoringContext.Provider value={value}>
      {children}
    </IntegrityMonitoringContext.Provider>
  );
};

export const useIntegrityMonitoring = () =>
  useContext(IntegrityMonitoringContext);
