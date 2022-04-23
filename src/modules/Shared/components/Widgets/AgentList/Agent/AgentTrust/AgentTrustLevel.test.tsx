import { render } from '@testing-library/react';
import AgentTrustLevel from '.';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('AgentTrustLevel', () => {
  it('should render the component', () => {
    const { container } = render(<AgentTrustLevel trustLevel={50} />);

    expect(container).not.toBeNull();
  });
});
