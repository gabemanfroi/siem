import { render } from '@testing-library/react';
import { createCriticalityDateHistogramMock } from 'modules/Shared/helpers/factories';
import DateHistogram from './index';
import { CriticalityByTimeType } from '../../../types/HistogramTypes';

const mockData = createCriticalityDateHistogramMock({
  typeOfRange: 'day',
  amountOfDays: 7,
});

describe('DateHistogram', () => {
  it('must render the component', () => {
    const { container } = render(<DateHistogram data={mockData} />);

    expect(container.children.length).toBeGreaterThan(0);
  });
  it('must render an empty div if no data is passed', () => {
    const { container } = render(
      <DateHistogram data={null as unknown as CriticalityByTimeType[]} />
    );

    expect(container.children.length).toBe(0);
  });
});
