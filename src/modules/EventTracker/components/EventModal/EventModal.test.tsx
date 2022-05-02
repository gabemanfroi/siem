import { render } from '@testing-library/react';
import EventModal from './index';

describe('EventModal', () => {
  const eventModalRender = render(<EventModal />);
  it('should render the component', () => {
    const { container } = eventModalRender;

    expect(container);
  });
});
