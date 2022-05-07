import { IChartSeries } from 'modules/Shared/types/charts/Core';

interface IAttacksByTechnique {
  categories: string[];
  series: IChartSeries[];
}

export default IAttacksByTechnique;
