export type ServiceStatus = 'normal' | 'warning' | 'critical';

export type AppType = 'All' | 'Web' | 'Android' | 'iOS';
export type DateRange = 'Last 24 hours' | 'Last 7 days' | 'Last 30 days';

export interface SummaryMetric {
  label: string;
  value: string;
  status: ServiceStatus;
  changeRate?: number;
}

export interface TrendPoint {
  time: string;
  errorRate: number;
  responseTime: number;
}

export interface DashboardFilter {
  appType: AppType;
  dateRange: DateRange;
}

export interface TrendSeries {
  label: Exclude<AppType, 'All'>;
  points: TrendPoint[];
}

export interface DashboardData {
  summary: SummaryMetric[];
  trend: TrendPoint[];
  trendSeries?: TrendSeries[];
  filters: DashboardFilter;
}