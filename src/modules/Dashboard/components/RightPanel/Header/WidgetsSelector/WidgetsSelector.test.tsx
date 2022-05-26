import { cleanup, fireEvent, render } from '@testing-library/react';
import WidgetsSelector from './index';

afterEach(cleanup);

describe('WidgetsSelector', () => {
  const renderer = () => render(<WidgetsSelector />);
  it('should render the component', () => {
    const { container } = renderer();

    expect(container.children.length).toBeGreaterThan(0);
  });

  it('should render the selector button', () => {
    const { getByRole } = renderer();

    expect(getByRole('button'));
  });

  it('should open the popper element when the button is clicked', () => {
    const { getByRole, getByText } = renderer();

    fireEvent.click(getByRole('button'));

    expect(getByText('Select your own widgets'));
  });

  it('should be possible to filter the options list', () => {
    const { getByRole } = renderer();

    fireEvent.click(getByRole('button'));

    const initialOptionsLength = getByRole('listbox').children.length;

    fireEvent.change(getByRole('combobox'), {
      target: { value: 'Mitre' },
    });

    const finalOptionsLenght = getByRole('listbox').children.length;

    expect(finalOptionsLenght).not.toEqual(initialOptionsLength);
  });

  it('should close the popper when we press escape', () => {
    const { getByRole, queryByRole } = renderer();

    fireEvent.click(getByRole('button'));

    fireEvent.keyDown(getByRole('combobox'), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(queryByRole('combobox')).toBeNull();
  });
});
