import { ApexOptions } from 'apexcharts';
import { HEXADECIMAL_REGEX } from 'modules/Shared/core/Constants';
import DonutChartOptionsFactory from '.';

const defaultExpectedObject = {
  chart: { height: expect.any(Number), type: 'donut' },
  labels: expect.any(Array),
  legend: { position: 'bottom' },
  title: {
    align: 'center',
    style: { color: expect.stringMatching(HEXADECIMAL_REGEX) },
    text: expect.any(String),
  },
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
