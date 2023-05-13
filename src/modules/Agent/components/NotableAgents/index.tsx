import { Stack } from '@mui/material';
import NotableAgent from 'modules/Agent/components/NotableAgents/NotableAgent';
import { useNotableAgentsQuery } from 'modules/Agent/hooks/queries/useNotableAgentsQuery';
import { LoadingHandler } from 'modules/Shared/components';

export const NotableAgents = () => {
  const { notableAgentsData, notableAgentsLoading } = useNotableAgentsQuery();

  return (
    <LoadingHandler loading={notableAgentsLoading}>
      <Stack spacing={1}>
        {notableAgentsData.map((a) => (
          <NotableAgent key={a.elasticsearchId} agent={a} />
        ))}
      </Stack>
    </LoadingHandler>
  );
};
