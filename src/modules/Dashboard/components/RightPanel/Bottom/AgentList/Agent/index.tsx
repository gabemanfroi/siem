import { AgentType } from 'modules/Shared/types/AgentType';
import { Skeleton } from '@mui/material';
import { Container } from './style';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import { useAppSelector } from '../../../../../../Shared/hooks/useAppSelector';

interface AgentInterface {
  agent: AgentType;
}

export default function Agent({ agent }: AgentInterface) {
  const {
    trustLevel,
    generalData: { ip = '', name },
    eventsByLevel,
  } = agent;
  const { isLoading } = useAppSelector(({ loading }) => loading);

  const totalOfEvents = Object.keys(eventsByLevel).reduce(
    (prevValue, key) =>
      prevValue + eventsByLevel[key as 'low' | 'medium' | 'high'],
    0
  );

  return (
    <Container>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '75px' }}
        />
      )}
      {!isLoading && (
        <>
          <Left reliabilityLevel={trustLevel} />
          <Middle ip={ip} name={name} eventsByLevel={eventsByLevel} />
          <Right totalOfEvents={totalOfEvents} agent={agent} />
        </>
      )}
    </Container>
  );
}
