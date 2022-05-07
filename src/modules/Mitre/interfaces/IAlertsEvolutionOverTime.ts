import { IChartSeries } from 'modules/Shared/types/charts/Core';

interface IAlertsEvolutionOverTime {
  categories: string[];
  series: IChartSeries[];
}

export default IAlertsEvolutionOverTime;
