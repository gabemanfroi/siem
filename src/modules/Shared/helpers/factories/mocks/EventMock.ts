import faker from '@faker-js/faker';
import {
  IAlertInsideData,
  IAlertInsideDataMetadata,
  IDataFile,
  IDataHttp,
  IEvent,
  IEventAgent,
  IEventData,
  IMitre,
  IOsQuery,
  IOsQueryColumns,
  IRule,
  IWin,
  IWinEventData,
} from 'modules/Shared/interfaces';

function generateMitre(): IMitre {
  return {
    id: [faker.random.alphaNumeric(5), faker.random.alphaNumeric(5)],
    tactic: [faker.lorem.word(), faker.lorem.word()],
    technique: [faker.lorem.word(), faker.lorem.word()],
  };
}

function generateRule(): IRule {
  return {
    level: faker.random.number(10),
    description: faker.lorem.sentence(),
    id: faker.random.number(),
    firedtimes: faker.random.number(100),
    mail: faker.datatype.boolean(),
    groups: [faker.lorem.word(), faker.lorem.word()],
    gdpr: [faker.lorem.word(), faker.lorem.word()],
    gpg13: [faker.lorem.word(), faker.lorem.word()],
  };
}

function generateAgent(): IEventAgent {
  return {
    id: faker.random.alphaNumeric(10),
    name: faker.name.firstName(),
    ip: faker.internet.ip(),
  };
}

function generateOsQueryColumns(): IOsQueryColumns {
  return {
    flags: faker.lorem.word(),
    name: faker.lorem.word(),
    type: faker.lorem.word(),
    path: faker.system.filePath(),
    action: faker.lorem.word(),
  };
}

function generateOsQuery(): IOsQuery {
  return {
    name: faker.lorem.word(),
    hostIdentifier: faker.random.alphaNumeric(10),
    columns: generateOsQueryColumns(),
    action: faker.lorem.word(),
  };
}

function generateDataHttp(): IDataHttp {
  return {
    hostname: faker.internet.domainName(),
    url: faker.internet.url(),
    http_user_agent: faker.internet.userAgent(),
    xff: faker.internet.ip(),
    http_method: faker.lorem.word(),
    protocol: faker.lorem.word(),
    length: faker.datatype.number().toString(),
  };
}

function generateDataFile(): IDataFile {
  return {
    filename: faker.system.fileName(),
    sid: [faker.random.alphaNumeric(5), faker.random.alphaNumeric(5)],
    gaps: faker.datatype.boolean(),
    state: faker.lorem.word(),
    stored: faker.datatype.boolean(),
    size: faker.datatype.number(),
    tx_id: faker.datatype.number(),
  };
}

function generateWinEventData(): IWinEventData {
  return {
    ruleName: faker.lorem.word(),
    utcTime: faker.date.recent().toISOString(),
    processGuid: faker.random.alphaNumeric(10),
    processId: faker.datatype.number().toString(),
    image: faker.system.filePath(),
    imageLoaded: faker.system.filePath(),
    fileVersion: faker.system.semver(),
    description: faker.lorem.sentence(),
    product: faker.commerce.product(),
    originalFileName: faker.system.fileName(),
    hashes: faker.random.alphaNumeric(10),
    signed: faker.datatype.boolean().toString(),
    signature: faker.random.alphaNumeric(10),
    signatureStatus: faker.lorem.word(),
    user: faker.internet.userName(),
  };
}

export const generateAlertInsideDataMetadata =
  (): IAlertInsideDataMetadata => ({
    affected_product: [faker.random.word(), faker.random.word()],
    attack_target: [faker.random.word(), faker.random.word()],
    created_at: [
      faker.date.recent().toISOString(),
      faker.date.recent().toISOString(),
    ],
    cve: [faker.random.word(), faker.random.word()],
    deployment: [faker.random.word(), faker.random.word()],
    former_category: [faker.random.word(), faker.random.word()],
    signature_severity: [faker.random.word(), faker.random.word()],
    updated_at: [
      faker.date.recent().toISOString(),
      faker.date.recent().toISOString(),
    ],
  });

export const generateAlertInsideData = (): IAlertInsideData => ({
  action: faker.random.word(),
  signature: faker.random.word(),
  category: faker.random.word(),
  metadata: generateAlertInsideDataMetadata(),
});

const generateWin = (): IWin => ({
  eventdata: generateWinEventData(),
});

export const generateEventData = (): IEventData => ({
  dest_ip: faker.internet.ip(),
  dest_port: String(faker.internet.port()),
  file: faker.system.fileName(),
  files: [generateDataFile()],
  http: generateDataHttp(),
  osquery: generateOsQuery(),
  payload: faker.random.word(),
  win: generateWin(),
});

export const generateEvent = (): IEvent => ({
  rule: generateRule(),
  agent: generateAgent(),
  id: faker.random.uuid(),
  data: generateEventData(),
  full_log: faker.lorem.word(),
  mitre: generateMitre(),
  timestamp: faker.date.soon().toString(),
});
