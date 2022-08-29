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
