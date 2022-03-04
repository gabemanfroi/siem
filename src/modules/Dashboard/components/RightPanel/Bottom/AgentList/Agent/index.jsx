import { Container } from './style';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

export default function Agent({ agent }) {
  const { trustLevel, ip, name, eventsByLevel } = agent;

  const totalOfEvents = Object.keys(eventsByLevel).reduce(
    (prevValue, key) => prevValue + eventsByLevel[key],
    0
  );

  return (
    <Container>
      <Left reliabilityLevel={trustLevel} />
      <Middle
        ip={ip}
        name={name}
        reliabilityLevel={trustLevel}
        eventsByLevel={eventsByLevel}
      />
      <Right totalOfEvents={totalOfEvents} agent={agent} />
    </Container>
  );
}
