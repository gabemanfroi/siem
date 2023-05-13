import { IBase } from 'modules/Shared/interfaces/IBase';

export default interface IAgent extends IBase {
  id: number;
  elasticsearchName: string;
  ip: string;
  name: string;
  deviceType: 'SERVER' | 'DESKTOP' | 'LAPTOP' | 'MOBILE';
  sensitivityLevel: number;
}
