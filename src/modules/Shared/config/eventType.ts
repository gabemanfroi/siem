import { chartAqua, chartRed, chartYellow } from '../helpers/styles/Colors';

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
