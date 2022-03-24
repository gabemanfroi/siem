// import { useAppSelector } from 'modules/Shared/hooks/useAppSelector';
// import { Skeleton } from '@mui/material';

// @ts-ignore
// eslint-disable-next-line import/extensions
import groupedByAgent from 'modules/Shared/assets/data/agents.json';
import { Container } from './style';
import Agent from './Agent';
import { AgentType } from '../../../../../Shared/types';

export default function AgentList() {
  // const { groupedByAgent } = useAppSelector(({ dashboard }) => dashboard);
  // const { isLoading } = useAppSelector(({ loading }) => loading);

  return (
    <Container>
      <h5>Agentes</h5>
      {/* {isLoading && ( */}
      {/*  <Skeleton */}
      {/*    variant="rectangular" */}
      {/*    sx={{ flex: 1, borderRadius: '5px' }} */}
      {/*    animation="wave" */}
      {/*  /> */}
      {/* )} */}
      {groupedByAgent.map((agent: AgentType) => (
        <Agent key={agent.generalData.id} agent={agent} />
      ))}
    </Container>
  );
}
