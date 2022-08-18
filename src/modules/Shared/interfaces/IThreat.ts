interface IThreat {
  timestamp: number;
  description: string;
  id: string;
  category: 'virustotal' | 'vulnerability' | 'mitre';
}

export default IThreat;
