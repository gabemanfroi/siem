export interface IPolicySummary {
  pass: number;
  fail: number;
  score: number;
  totalChecks: number;
  invalid: number;
}

export interface IPolicy {
  description: string;
  name: string;
  totalChecks: number;
  score: number;
  fail: number;
  pass: number;
  policyId: string;
  invalid: number;
  endScan: Date;
}

interface IPolicyCompliance {
  rule: string;
  ruleItem: string;
}

export interface IPolicyCheckItem {
  id: number;
  description: string;
  title: string;
  file: string;
  remediation: string;
  rationale: string;
  compliance: IPolicyCompliance[];
  result: string;
}
