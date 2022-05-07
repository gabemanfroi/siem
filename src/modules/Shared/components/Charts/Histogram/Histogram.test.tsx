import { render } from '@testing-library/react';
import { AttacksByTechniqueMockFactory } from 'modules/Mitre/helpers/factories';
import { ApexOptions } from 'apexcharts';
import Histogram from './index';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

afterAll(() => jest.unmock('react-apexcharts'));
const { categories, series } = AttacksByTechniqueMockFactory();
const options: ApexOptions = {
  title: {
    text: 'Attacks By Technique',
    style: {
      color: '#fff',
    },
  },
  chart: {
    stacked: true,
  },
  xaxis: {
    categories,
  },
  series,
};

describe('Histogram', () => {
  it('must render the component for the best case', () => {
    const { container } = render(<Histogram options={options} />);

    expect(container.children.length).toBeGreaterThan(0);
  });

  it('must render an empty div if no series are passed', () => {
    const { container } = render(<Histogram options={{}} />);

    expect(container.children.length).toBe(0);
  });
});
