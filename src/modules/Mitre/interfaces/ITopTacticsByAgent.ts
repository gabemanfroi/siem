import { IChartSeries } from 'modules/Shared/types/charts/Core';

interface ITopTacticsByAgent {
  categories: string[];
  series: IChartSeries[];
}

export default ITopTacticsByAgent;
