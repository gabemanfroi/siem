import {
  chartAqua,
  chartRed,
  chartYellow,
} from '../stylesHelpers/colorVariables';

const eventTypeConfig = {
  LOW: {
    color: chartAqua,
    label: 'Baixo',
  },
  MEDIUM: {
    color: chartYellow,
    label: 'Médio',
  },
  HIGH: {
    color: chartRed,
    label: 'Alto',
  },
};

export default eventTypeConfig;
