import { DateHistogram } from 'modules/Shared/components/Charts';
import { createCriticalityDateHistogramMock } from 'modules/Shared/helpers/factories/mocks/charts';

const CriticalityDateHistogram = () => (
  <DateHistogram
    data={createCriticalityDateHistogramMock({
      typeOfRange: 'day',
      amountOfDays: 7,
    })}
  />
);

export default CriticalityDateHistogram;
