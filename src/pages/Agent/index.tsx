import DefaultLayout from 'modules/Shared/components/DefaultLayout';
import WidgetsGrid from 'modules/Shared/components/WidgetsGrid';
import { useEffect, useMemo } from 'react';
import { getWidgetsListFromMap } from 'modules/Shared/helpers/getWidgetsListFromMap';
import { agentWidgets } from 'modules/Agent/contexts/AgentContext';
import { useAgentQuery } from 'modules/Agent/hooks/queries';
import { fillWidgetsWithData } from 'modules/Shared/helpers/fillWidgetsWithData';
import { useAgentContext } from 'modules/Agent/hooks';
import { PAGES } from 'modules/Shared/enums';

const Agent = () => {
  const widgets = useMemo(() => getWidgetsListFromMap(agentWidgets), []);
  const { widgetsHandler } = useAgentContext();

  const { getAgentPageData, getAgentPageIsLoading } = useAgentQuery();

  useEffect(() => {
    if (getAgentPageData) {
      const { data } = getAgentPageData;
      fillWidgetsWithData(data, widgetsHandler);
    }
  }, [getAgentPageData]);

  if (getAgentPageIsLoading) return <></>;

  return (
    <DefaultLayout>
      <WidgetsGrid widgets={widgets} page={PAGES.AGENT} />
    </DefaultLayout>
  );
};

export default Agent;
