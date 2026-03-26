export interface ErrorRateResponse {
  metric: 'errorRate';
  points: {
    timestamp: string;
    value: number;
  }[];
}

export interface ResponseTimeResponse {
  metric: 'responseTime';
  items: {
    timeLabel: string;
    avgMs: number;
  }[];
}