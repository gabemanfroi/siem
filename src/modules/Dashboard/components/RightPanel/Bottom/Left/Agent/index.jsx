import { Container } from './style';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

export default function Agent({ agent }) {
  const {
    reliabilityLevel,
    ipAddress,
    name,
    amountOfHighLevelEvents,
    amountOfLowLevelEvents,
    amountOfMediumLevelEvents,
  } = agent;

  const totalOfEvents =
    parseFloat(amountOfMediumLevelEvents) +
    parseFloat(amountOfLowLevelEvents) +
    parseFloat(amountOfHighLevelEvents);

  return (
    <Container>
      <Left reliabilityLevel={reliabilityLevel} />
      <Middle
        ipAddress={ipAddress}
        name={name}
        reliabilityLevel={reliabilityLevel}
      />
      <Right totalOfEvents={totalOfEvents} agent={agent} />
    </Container>
  );
}
