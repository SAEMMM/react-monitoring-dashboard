import type { ErrorRateResponse, ResponseTimeResponse } from '../types/api';

export const errorRateMock: ErrorRateResponse = {
  metric: 'errorRate',
  points: [
    { timestamp: '03/20', value: 1.2 },
    { timestamp: '03/21', value: 1.5 },
    { timestamp: '03/22', value: 1.8 },
    { timestamp: '03/23', value: 2.1 },
    { timestamp: '03/24', value: 2.0 },
    { timestamp: '03/25', value: 2.3 },
    { timestamp: '03/26', value: 2.4 },
  ],
};

export const responseTimeMock: ResponseTimeResponse = {
  metric: 'responseTime',
  items: [
    { timeLabel: '03/20', avgMs: 320 },
    { timeLabel: '03/21', avgMs: 340 },
    { timeLabel: '03/22', avgMs: 360 },
    { timeLabel: '03/23', avgMs: 410 },
    { timeLabel: '03/24', avgMs: 430 },
    { timeLabel: '03/25', avgMs: 450 },
    { timeLabel: '03/26', avgMs: 470 },
  ],
};