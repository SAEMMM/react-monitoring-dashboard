import type {
  AppType,
  DashboardData,
  DashboardFilter,
  DateRange,
  TrendPoint,
  TrendSeries,
} from '../types/dashboard';

type DashboardDataMap = Record<AppType, Record<DateRange, DashboardData>>;

const createDashboardData = (
  filters: DashboardFilter,
  overrides: Partial<DashboardData>
): DashboardData => {
  return {
    filters,
    summary: [],
    trend: [],
    ...overrides,
  };
};

const web24hTrend: TrendPoint[] = [
  { time: '00:00', errorRate: 1.1, responseTime: 300 },
  { time: '04:00', errorRate: 1.3, responseTime: 320 },
  { time: '08:00', errorRate: 1.5, responseTime: 350 },
  { time: '12:00', errorRate: 1.7, responseTime: 360 },
  { time: '16:00', errorRate: 1.8, responseTime: 370 },
  { time: '20:00', errorRate: 1.8, responseTime: 380 },
];

const web7dTrend: TrendPoint[] = [
  { time: '03/20', errorRate: 1.2, responseTime: 320 },
  { time: '03/21', errorRate: 1.5, responseTime: 340 },
  { time: '03/22', errorRate: 1.8, responseTime: 360 },
  { time: '03/23', errorRate: 2.1, responseTime: 410 },
  { time: '03/24', errorRate: 2.0, responseTime: 430 },
  { time: '03/25', errorRate: 2.3, responseTime: 450 },
  { time: '03/26', errorRate: 2.4, responseTime: 470 },
];

const web30dTrend: TrendPoint[] = [
  { time: 'Week 1', errorRate: 1.4, responseTime: 340 },
  { time: 'Week 2', errorRate: 1.7, responseTime: 360 },
  { time: 'Week 3', errorRate: 1.9, responseTime: 390 },
  { time: 'Week 4', errorRate: 2.0, responseTime: 420 },
];

const android24hTrend: TrendPoint[] = [
  { time: '00:00', errorRate: 2.0, responseTime: 430 },
  { time: '04:00', errorRate: 2.3, responseTime: 460 },
  { time: '08:00', errorRate: 2.5, responseTime: 480 },
  { time: '12:00', errorRate: 2.8, responseTime: 500 },
  { time: '16:00', errorRate: 3.0, responseTime: 510 },
  { time: '20:00', errorRate: 3.1, responseTime: 520 },
];

const android7dTrend: TrendPoint[] = [
  { time: '03/20', errorRate: 2.4, responseTime: 450 },
  { time: '03/21', errorRate: 2.7, responseTime: 470 },
  { time: '03/22', errorRate: 2.9, responseTime: 500 },
  { time: '03/23', errorRate: 3.0, responseTime: 520 },
  { time: '03/24', errorRate: 3.2, responseTime: 530 },
  { time: '03/25', errorRate: 3.3, responseTime: 540 },
  { time: '03/26', errorRate: 3.4, responseTime: 540 },
];

const android30dTrend: TrendPoint[] = [
  { time: 'Week 1', errorRate: 2.2, responseTime: 430 },
  { time: 'Week 2', errorRate: 2.5, responseTime: 460 },
  { time: 'Week 3', errorRate: 2.7, responseTime: 480 },
  { time: 'Week 4', errorRate: 2.9, responseTime: 500 },
];

const ios24hTrend: TrendPoint[] = [
  { time: '00:00', errorRate: 0.7, responseTime: 240 },
  { time: '04:00', errorRate: 0.8, responseTime: 250 },
  { time: '08:00', errorRate: 0.8, responseTime: 260 },
  { time: '12:00', errorRate: 0.9, responseTime: 270 },
  { time: '16:00', errorRate: 0.9, responseTime: 280 },
  { time: '20:00', errorRate: 0.9, responseTime: 290 },
];

const ios7dTrend: TrendPoint[] = [
  { time: '03/20', errorRate: 0.8, responseTime: 260 },
  { time: '03/21', errorRate: 0.9, responseTime: 270 },
  { time: '03/22', errorRate: 1.0, responseTime: 280 },
  { time: '03/23', errorRate: 1.0, responseTime: 290 },
  { time: '03/24', errorRate: 1.1, responseTime: 300 },
  { time: '03/25', errorRate: 1.1, responseTime: 305 },
  { time: '03/26', errorRate: 1.1, responseTime: 310 },
];

const ios30dTrend: TrendPoint[] = [
  { time: 'Week 1', errorRate: 0.9, responseTime: 270 },
  { time: 'Week 2', errorRate: 1.0, responseTime: 290 },
  { time: 'Week 3', errorRate: 1.1, responseTime: 310 },
  { time: 'Week 4', errorRate: 1.2, responseTime: 325 },
];

const createTrendSeries = (
  webPoints: TrendPoint[],
  androidPoints: TrendPoint[],
  iosPoints: TrendPoint[]
): TrendSeries[] => [
  { label: 'Web', points: webPoints },
  { label: 'Android', points: androidPoints },
  { label: 'iOS', points: iosPoints },
];

export const dashboardMockDataMap: DashboardDataMap = {
  All: {
    'Last 24 hours': createDashboardData(
      { appType: 'All', dateRange: 'Last 24 hours' },
      {
        summary: [
          { label: 'Error Rate', value: '1.9%', status: 'warning', changeRate: 0.3 },
          { label: 'Avg Response Time', value: '397ms', status: 'warning', changeRate: 6.9 },
          { label: 'Active Users', value: '16,990', status: 'normal', changeRate: 3.5 },
          { label: 'Crash Count', value: '15', status: 'warning', changeRate: 0.4 },
        ],
        trend: [],
        trendSeries: createTrendSeries(web24hTrend, android24hTrend, ios24hTrend),
      }
    ),
    'Last 7 days': createDashboardData(
      { appType: 'All', dateRange: 'Last 7 days' },
      {
        summary: [
          { label: 'Error Rate', value: '2.3%', status: 'warning', changeRate: 0.4 },
          { label: 'Avg Response Time', value: '433ms', status: 'warning', changeRate: 10.4 },
          { label: 'Active Users', value: '48,100', status: 'normal', changeRate: 7.5 },
          { label: 'Crash Count', value: '57', status: 'warning', changeRate: 3.2 },
        ],
        trend: [],
        trendSeries: createTrendSeries(web7dTrend, android7dTrend, ios7dTrend),
      }
    ),
    'Last 30 days': createDashboardData(
      { appType: 'All', dateRange: 'Last 30 days' },
      {
        summary: [
          { label: 'Error Rate', value: '2.0%', status: 'warning', changeRate: 0.2 },
          { label: 'Avg Response Time', value: '415ms', status: 'warning', changeRate: 8.0 },
          { label: 'Active Users', value: '148,680', status: 'normal', changeRate: 10.7 },
          { label: 'Crash Count', value: '147', status: 'warning', changeRate: 2.4 },
        ],
        trend: [],
        trendSeries: createTrendSeries(web30dTrend, android30dTrend, ios30dTrend),
      }
    ),
  },

  Web: {
    'Last 24 hours': createDashboardData(
      { appType: 'Web', dateRange: 'Last 24 hours' },
      {
        summary: [
          { label: 'Error Rate', value: '1.8%', status: 'warning', changeRate: 0.2 },
          { label: 'Avg Response Time', value: '380ms', status: 'warning', changeRate: 5.4 },
          { label: 'Active Users', value: '4,820', status: 'normal', changeRate: 2.1 },
          { label: 'Crash Count', value: '4', status: 'normal', changeRate: -1.2 },
        ],
        trend: web24hTrend,
      }
    ),
    'Last 7 days': createDashboardData(
      { appType: 'Web', dateRange: 'Last 7 days' },
      {
        summary: [
          { label: 'Error Rate', value: '2.3%', status: 'warning', changeRate: 0.4 },
          { label: 'Avg Response Time', value: '450ms', status: 'warning', changeRate: 12 },
          { label: 'Active Users', value: '12,480', status: 'normal', changeRate: 8.1 },
          { label: 'Crash Count', value: '18', status: 'critical', changeRate: 3.2 },
        ],
        trend: web7dTrend,
      }
    ),
    'Last 30 days': createDashboardData(
      { appType: 'Web', dateRange: 'Last 30 days' },
      {
        summary: [
          { label: 'Error Rate', value: '2.0%', status: 'warning', changeRate: 0.1 },
          { label: 'Avg Response Time', value: '420ms', status: 'warning', changeRate: 8.4 },
          { label: 'Active Users', value: '41,280', status: 'normal', changeRate: 12.2 },
          { label: 'Crash Count', value: '52', status: 'warning', changeRate: 1.4 },
        ],
        trend: web30dTrend,
      }
    ),
  },

  Android: {
    'Last 24 hours': createDashboardData(
      { appType: 'Android', dateRange: 'Last 24 hours' },
      {
        summary: [
          { label: 'Error Rate', value: '3.1%', status: 'critical', changeRate: 0.8 },
          { label: 'Avg Response Time', value: '520ms', status: 'critical', changeRate: 14.2 },
          { label: 'Active Users', value: '6,240', status: 'normal', changeRate: 3.6 },
          { label: 'Crash Count', value: '9', status: 'critical', changeRate: 2.8 },
        ],
        trend: android24hTrend,
      }
    ),
    'Last 7 days': createDashboardData(
      { appType: 'Android', dateRange: 'Last 7 days' },
      {
        summary: [
          { label: 'Error Rate', value: '3.4%', status: 'critical', changeRate: 0.7 },
          { label: 'Avg Response Time', value: '540ms', status: 'critical', changeRate: 15.8 },
          { label: 'Active Users', value: '18,920', status: 'normal', changeRate: 6.4 },
          { label: 'Crash Count', value: '31', status: 'critical', changeRate: 5.2 },
        ],
        trend: android7dTrend,
      }
    ),
    'Last 30 days': createDashboardData(
      { appType: 'Android', dateRange: 'Last 30 days' },
      {
        summary: [
          { label: 'Error Rate', value: '2.9%', status: 'critical', changeRate: 0.3 },
          { label: 'Avg Response Time', value: '500ms', status: 'warning', changeRate: 11.2 },
          { label: 'Active Users', value: '58,300', status: 'normal', changeRate: 10.1 },
          { label: 'Crash Count', value: '74', status: 'critical', changeRate: 4.1 },
        ],
        trend: android30dTrend,
      }
    ),
  },

  iOS: {
    'Last 24 hours': createDashboardData(
      { appType: 'iOS', dateRange: 'Last 24 hours' },
      {
        summary: [
          { label: 'Error Rate', value: '0.9%', status: 'normal', changeRate: -0.1 },
          { label: 'Avg Response Time', value: '290ms', status: 'normal', changeRate: 1.2 },
          { label: 'Active Users', value: '5,930', status: 'normal', changeRate: 4.8 },
          { label: 'Crash Count', value: '2', status: 'normal', changeRate: -0.8 },
        ],
        trend: ios24hTrend,
      }
    ),
    'Last 7 days': createDashboardData(
      { appType: 'iOS', dateRange: 'Last 7 days' },
      {
        summary: [
          { label: 'Error Rate', value: '1.1%', status: 'normal', changeRate: 0.1 },
          { label: 'Avg Response Time', value: '310ms', status: 'normal', changeRate: 3.4 },
          { label: 'Active Users', value: '16,700', status: 'normal', changeRate: 7.9 },
          { label: 'Crash Count', value: '8', status: 'warning', changeRate: 1.1 },
        ],
        trend: ios7dTrend,
      }
    ),
    'Last 30 days': createDashboardData(
      { appType: 'iOS', dateRange: 'Last 30 days' },
      {
        summary: [
          { label: 'Error Rate', value: '1.2%', status: 'normal', changeRate: 0.2 },
          { label: 'Avg Response Time', value: '325ms', status: 'normal', changeRate: 4.5 },
          { label: 'Active Users', value: '49,100', status: 'normal', changeRate: 9.8 },
          { label: 'Crash Count', value: '21', status: 'warning', changeRate: 1.8 },
        ],
        trend: ios30dTrend,
      }
    ),
  },
};