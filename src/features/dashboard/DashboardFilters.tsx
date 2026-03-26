import type {
  AppType,
  DashboardFilter,
  DateRange,
} from "../../types/dashboard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import type { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  filters: DashboardFilter;
  onChangeAppType: (value: AppType) => void;
  onChangeDateRange: (value: DateRange) => void;
}

const appTypeOptions: AppType[] = ["All", "Web", "Android", "iOS"];
const dateRangeOptions: DateRange[] = [
  "Last 24 hours",
  "Last 7 days",
  "Last 30 days",
];

export function DashboardFilters({
  filters,
  onChangeAppType,
  onChangeDateRange,
}: Props) {
  const handleChangeAppType = (event: SelectChangeEvent<AppType>) => {
    onChangeAppType(event.target.value as AppType);
  };

  const handleChangeDateRange = (event: SelectChangeEvent<DateRange>) => {
    onChangeDateRange(event.target.value as DateRange);
  };

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel id="app-type-label">App Type</InputLabel>
        <Select<AppType>
          labelId="app-type-label"
          value={filters.appType}
          label="App Type"
          onChange={handleChangeAppType}
        >
          {appTypeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option === "All" ? "전체" : option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel id="date-range-label">Date Range</InputLabel>
        <Select<DateRange>
          labelId="date-range-label"
          value={filters.dateRange}
          label="Date Range"
          onChange={handleChangeDateRange}
        >
          {dateRangeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
