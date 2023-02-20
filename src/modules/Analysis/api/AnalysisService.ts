import { BaseService } from 'modules/Shared/services/BaseService';
import { IAnalysis } from 'modules/Shared/interfaces';
import { ROUTES } from 'modules/Shared/constants/routes';

const AnalysisService = () => ({
  ...BaseService<IAnalysis>(ROUTES.BRAGI.ANALYSIS),
});

export default AnalysisService();
