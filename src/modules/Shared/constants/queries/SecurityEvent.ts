export const SECURITY_EVENT = {
  FIND_BY_ELASTICSEARCH_ID: 'SecurityEventQueries@findByElasticsearchId',
  GET_PAGE_DATA: 'SecurityEventQueries@getPageData',
  GET_EVENTS_BELONGING_TO_AGENT:
    'SecurityEventQueries@getEventsBelongingToAgent',
  GET_EVENTS_BY_AGENT_AND_VULNERABILITY:
    'SecurityEventQueries@getEventsByAgentAndVulnerability',
  GET_LATEST_THREATS: 'SecurityEventQueries@getLatestThreats',
  GET_ALERT_EVOLUTION_TOP_5_AGENTS:
    'SecurityEventQueries@getAlertEvolutionTop5Agents',
  GET_TOP_MITRE: 'SecurityEventQueries@getTopMitre',
  GET_ALERT_LEVEL_EVOLUTION: 'SecurityEventQueries@getAlertLevelEvolution',
  GET_TOTAL_EVENTS_BY_COUNTRIES:
    'SecurityEventQueries@getTotalEventsByCountries',
};
