export interface IAgent {
  id: string;
  name: string;
  dateAdd?: string;
  manager?: string;
  group?: string[];
  ip?: string;
  status?: string;
  os?: {
    arch?: null;
    codename?: null;
    major?: string;
    minor?: string;
    name?: string;
    platform?: string;
    uname?: string;
    version?: string;
  };
}
