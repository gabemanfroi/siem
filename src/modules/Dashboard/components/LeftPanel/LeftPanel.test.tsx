import { render } from '@testing-library/react';
import LeftPanel from './index';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('LeftPanel', () => {
  it('must render the component', () => {
    const { container } = render(<LeftPanel />);

    expect(container);
  });
});
