export interface IMitre {
  id: string[];
  tactic: string[];
  technique: string[];
}

export interface IWinEventData {
  ruleName?: string;
  utcTime?: string;
  processGuid?: string;
  processId?: string;
  image?: string;
  imageLoaded?: string;
  fileVersion?: string;
  description?: string;
  product?: string;
  originalFileName?: string;
  hashes?: string;
  signed?: string;
  signature?: string;
  signatureStatus?: string;
  user?: string;
  targetDomainName?: string;
  ipPort?: string;
}

export interface IWinSystem {
  providerName?: string;
  providerGuid?: string;
  eventID?: string;
  version?: string;
  level?: string;
  task?: string;
  opcode?: string;
  keywords?: string;
  systemTime?: string;
  eventRecordID?: string;
  processID?: string;
  threadID?: string;
  channel?: string;
  computer?: string;
  severityValue?: string;
  message?: string;
  eventdata?: IWinEventData;
}

export interface IWin {
  system?: IWinSystem;
  eventdata?: IWinEventData;
}

export interface IManager {
  name: string;
}

export interface IRule {
  level: number;
  description: string;
  id: number | null;
  firedtimes: number;
  mail: boolean;
  groups?: string[];
  gdpr?: string[];
  gpg13?: string[];
}

export interface IEventAgent {
  id: string;
  name: string;
  ip?: string;
}

export interface IOsQueryColumns {
  flags?: string;
  name?: string;
  type?: string;
  path?: string;
  action?: string;
}

export interface IOsQuery {
  name: string;
  hostIdentifier: string;
  columns: IOsQueryColumns;
  action: string;
}

export interface IDataHttp {
  hostname?: string;
  url?: string;
  http_user_agent?: string;
  xff?: string;
  http_method?: string;
  protocol?: string;
  length?: string;
}

export interface IDataFile {
  filename?: string;
  sid?: string[];
  gaps?: boolean;
  state?: string;
  stored?: boolean;
  size?: number;
  tx_id?: number;
}

export interface IAlertInsideDataMetadata {
  affected_product?: string[];
  attack_target?: string[];
  created_at?: string[];
  cve?: string[];
  deployment?: string[];
  former_category?: string[];
  signature_severity?: string[];
  updated_at?: string[];
}

export interface IAlertInsideData {
  action?: string;
  signature?: string;
  category?: string;
  metadata?: IAlertInsideDataMetadata;
}

interface IPackage {
  condition: string;
  name: string;
  source: string;
  version: string;
  architecture: string;
}

interface IVulnerability {
  severity: string;
  package: IPackage;
  cve: string;
  references: string[];
  published: string;
  bugzilla_references?: string[];
  title: string;
  type: string;
  rationale: string;
  status: string;
}

export interface IEventData {
  osquery?: IOsQuery;
  win?: IWin;
  src_ip?: string;
  src_port?: string;
  dest_ip?: string;
  dest_port?: string;
  proto?: string;
  http?: IDataHttp;
  files?: IDataFile[];
  payload?: string;
  payload_printable?: string;
  file?: string;
  vulnerability?: IVulnerability;
}

export interface IEvent {
  timestamp: string;
  rule: IRule;
  agent: IEventAgent;
  id: string;
  data?: IEventData;
  full_log?: string;
  mitre?: IMitre;
}
