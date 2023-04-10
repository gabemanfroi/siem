interface IThreat {
  timestamp: number;
  description: string;
  id: string;
  level: number;
  category: 'virustotal' | 'vulnerability' | 'mitre';
}

export default IThreat;
