import { render } from '@testing-library/react';
import Heatmap from './index';

describe('Heatmap', () => {
  it('must render the component', () => {
    const { container } = render(<Heatmap />);

    expect(container);
  });
});
