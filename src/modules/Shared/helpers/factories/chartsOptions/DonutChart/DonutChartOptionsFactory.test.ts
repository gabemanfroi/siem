import { ApexOptions } from 'apexcharts';
import {
  DEFAULT_CHARTS_PALETTE,
  HEXADECIMAL_REGEX,
} from 'modules/Shared/core/Constants';
import DonutChartOptionsFactory from '.';

const defaultExpectedObject = {
  chart: { height: expect.any(Number), type: 'donut' },
  labels: expect.any(Array),
  legend: {
    position: 'right',
    labels: {
      colors: '#fff',
    },
  },
  theme: {
    palette: DEFAULT_CHARTS_PALETTE,
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    align: 'left',
    style: { color: expect.stringMatching(HEXADECIMAL_REGEX) },
  },
  series: expect.any(Array),
};

describe('DonutChartOptionsFactory', () => {
  it('must be possible to create options without any additional param', () => {
    const createdOptions = DonutChartOptionsFactory();

    expect(createdOptions).toMatchObject(
      expect.objectContaining(defaultExpectedObject)
    );
  });

  it('must be possible to create options passing custom ApexOptions params', () => {
    const customParams: ApexOptions = { chart: { height: 500 } };

    const createdOptions = DonutChartOptionsFactory(customParams);

    expect(createdOptions).toMatchObject(
      expect.objectContaining({ ...defaultExpectedObject, ...createdOptions })
    );
  });
});
