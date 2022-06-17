import { render } from '@testing-library/react';
import RightPanel from './index';

describe('RightPanel', () => {
  const rightPanelRender = () => render(<RightPanel />);

  it('must render the component', () => {
    const { container } = rightPanelRender();

    expect(container);
  });
});
