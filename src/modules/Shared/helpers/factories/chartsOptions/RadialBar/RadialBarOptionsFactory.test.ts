import { HEXADECIMAL_REGEX } from 'modules/Shared/core/Constants';
import { ApexOptions } from 'apexcharts';
import RadialBarOptionsFactory from './index';

const defaultExpectedObject = {
  chart: {
    height: expect.any(Number),
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      track: {
        background: expect.stringMatching(HEXADECIMAL_REGEX),
      },
      dataLabels: {
        name: {
          color: expect.stringMatching(HEXADECIMAL_REGEX),
        },
        value: {
          color: expect.stringMatching(HEXADECIMAL_REGEX),
          formatter: expect.any(Function),
        },
      },
      hollow: {
        size: '70%',
      },
    },
  },
  stroke: {
    lineCap: 'round',
  },
  labels: expect.any(Array),
};

describe('RadialBarOptionsFactory', () => {
  it('must be possible to create options without any additional param', () => {
    const createdOptions = RadialBarOptionsFactory();

    expect(createdOptions).toMatchObject(
      expect.objectContaining(defaultExpectedObject)
    );
  });

  it('must be possible to create options passing custom ApexOptions params', () => {
    const customParams: ApexOptions = { chart: { height: 500 } };

    const createdOptions = RadialBarOptionsFactory(customParams);

    expect(createdOptions).toMatchObject(
      expect.objectContaining({ ...defaultExpectedObject, ...createdOptions })
    );
  });
});
