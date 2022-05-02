import { render } from '@testing-library/react';
import RightPanel from './index';

describe('RightPanel', () => {
  const rightPanelRender = render(<RightPanel />);
  it('should render the component', () => {
    const { container } = rightPanelRender;

    expect(container);
  });
});
