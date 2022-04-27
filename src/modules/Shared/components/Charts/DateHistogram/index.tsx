import { useDateHistogram } from 'modules/Shared/hooks';
import {
  CriticalityByTimeType,
  GdprByTimeType,
} from 'modules/Shared/types/HistogramTypes';
import Histogram from '../Histogram';

interface DateHistogramPropsInterface {
  data: (CriticalityByTimeType | GdprByTimeType)[];
}

const DateHistogram = ({ data }: DateHistogramPropsInterface) => {
  const { options } = useDateHistogram(data);

  return <Histogram options={options} />;
};

export default DateHistogram;
