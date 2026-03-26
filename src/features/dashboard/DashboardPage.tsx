import type { AppType, DashboardFilter, DateRange } from '../../types/dashboard';
import { Box, Skeleton, Stack, Typography } from '@mui/material';

import { DashboardFilters } from './DashboardFilters';
import { ErrorTrendChart } from './ErrorTrendChart';
import { SummaryCards } from './SummaryCards';
import { fetchDashboardData } from '../../apis/dashboard';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const initialFilters: DashboardFilter = {
  appType: 'All',
  dateRange: 'Last 7 days',
};

export function DashboardPage() {
  const [filters, setFilters] = useState<DashboardFilter>(initialFilters);

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ['dashboard', filters.appType, filters.dateRange],
    queryFn: () => fetchDashboardData(filters),
  });

  const handleChangeAppType = (value: AppType) => {
    setFilters((prev) => ({
      ...prev,
      appType: value,
    }));
  };

  const handleChangeDateRange = (value: DateRange) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: value,
    }));
  };

  if (isLoading) {
    return (
      <Stack spacing={3}>
        <Skeleton variant="rounded" height={40} width={360} />
        <Skeleton variant="rounded" height={140} />
        <Skeleton variant="rounded" height={320} />
      </Stack>
    );
  }

  if (isError || !data) {
    return <Box p={4}>Failed to load dashboard data.</Box>;
  }

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Filters
        </Typography>
        <DashboardFilters
          filters={filters}
          onChangeAppType={handleChangeAppType}
          onChangeDateRange={handleChangeDateRange}
        />
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Summary
        </Typography>
        {isFetching ? (
          <Skeleton variant="rounded" height={140} />
        ) : (
          <SummaryCards data={data.summary} />
        )}
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Error & Response Trend
        </Typography>
        {isFetching ? (
          <Skeleton variant="rounded" height={320} />
        ) : (
          <ErrorTrendChart data={data.trend} trendSeries={data.trendSeries} />
        )}
      </Box>
    </Stack>
  );
}