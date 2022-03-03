import {
  chartAqua,
  chartRed,
  chartYellow,
} from '../stylesHelpers/colorVariables';

const eventTypeConfig = {
  low: {
    color: chartAqua,
    label: 'Baixo',
  },
  medium: {
    color: chartYellow,
    label: 'Médio',
  },
  high: {
    color: chartRed,
    label: 'Alto',
  },
};

export default eventTypeConfig;
