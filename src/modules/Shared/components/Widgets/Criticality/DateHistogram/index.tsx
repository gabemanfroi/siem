import { DateHistogram } from 'modules/Shared/components/Charts';
import { createCriticityDateHistogramMock } from 'modules/Shared/helpers/factories/mocks/charts';

const CriticalityDateHistogram = () => (
  <DateHistogram
    data={createCriticityDateHistogramMock({
      typeOfRange: 'day',
      amountOfDays: 7,
    })}
  />
);

export default CriticalityDateHistogram;
