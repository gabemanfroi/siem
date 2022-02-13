import { Container } from './style';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

export default function Agent({ agent }) {
  const { reliabilityLevel, ipAddress, name, eventAmounts } = agent;

  const totalOfEvents = eventAmounts.reduce(
    (prevValue, event) => prevValue + event.quantity,
    0
  );

  return (
    <Container>
      <Left reliabilityLevel={reliabilityLevel} />
      <Middle
        ipAddress={ipAddress}
        name={name}
        reliabilityLevel={reliabilityLevel}
        eventAmounts={eventAmounts}
      />
      <Right totalOfEvents={totalOfEvents} agent={agent} />
    </Container>
  );
}
