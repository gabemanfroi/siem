export default interface IAgent {
  generalData: {
    id: number;
    elasticsearchName: string;
    ip: string;
    name: string;
    deviceType: 'SERVER' | 'DESKTOP' | 'LAPTOP' | 'MOBILE';
  };
}
