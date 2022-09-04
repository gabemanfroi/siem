import { cleanup, fireEvent, render } from '@testing-library/react';
import DateFilter from 'modules/Shared/components/Header/DateFilter/index';

afterEach(cleanup);

describe('DateFilter', () => {
  const renderer = () => render(<DateFilter />);
  it('should render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should be possible to change initial date on typing inside the input', () => {
    const { getByTestId } = renderer();
    const initialDatePicker =
      getByTestId('initialDatePicker').querySelector('input[type="tel"]');

    if (!initialDatePicker) throw new Error('element not found');

    fireEvent.change(initialDatePicker, { target: { value: '12/12/2001' } });

    expect(initialDatePicker).toHaveValue('12/12/2001');
  });
  it('should be possible to change final date on typing inside the input', () => {
    const { getByTestId } = renderer();
    const endDatePicker =
      getByTestId('endDatePicker').querySelector('input[type="tel"]');
    if (!endDatePicker) throw new Error('element not found');

    fireEvent.change(endDatePicker, { target: { value: '12/12/2001' } });

    expect(endDatePicker).toHaveValue('12/12/2001');
  });
});
