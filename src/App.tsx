import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { errorRateMock, responseTimeMock } from "./mocks/data";

import { BaseLineChart } from "./components/charts/BaseLineChart";
import { buildLineChartModel } from "./adapters/buildLineChartModel";
import { normalizeErrorRate } from "./adapters/normalizeErrorRate";
import { normalizeResponseTime } from "./adapters/normalizeResponseTime";

function App() {
  const errorRateSeries = normalizeErrorRate({
    response: errorRateMock,
    id: "error-rate",
    label: "Error Rate (%)",
    color: "#d32f2f",
  });

  const responseTimeSeries = normalizeResponseTime({
    response: responseTimeMock,
    id: "response-time",
    label: "Response Time (ms)",
    color: "#1976d2",
  });

  const errorRateModel = buildLineChartModel([errorRateSeries]);
  const responseTimeModel = buildLineChartModel([responseTimeSeries]);
  const combinedModel = buildLineChartModel([
    errorRateSeries,
    responseTimeSeries,
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={6}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Chart Data Normalization Demo
          </Typography>
          <Typography color="text.secondary">
            서로 다른 API 응답을 공통 차트 모델로 정규화하고, 하나의 공통 차트
            컴포넌트로 재사용하는 예제입니다.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            1. Error Rate Response → Common Chart Model
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            errorRate 응답은 timestamp/value 구조를 가지지만, adapter를 통해
            공통 ChartSeries로 변환합니다.
          </Typography>
          <BaseLineChart model={errorRateModel} yAxisTitle="Error Rate (%)" />
        </Box>

        <Box>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            2. Response Time Response → Common Chart Model
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            responseTime 응답은 timeLabel/avgMs 구조를 가지지만, 동일한 공통
            ChartSeries로 정규화합니다.
          </Typography>
          <BaseLineChart
            model={responseTimeModel}
            yAxisTitle="Response Time (ms)"
          />
        </Box>

        <Box>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            3. Multiple Responses → One Reusable Chart Component
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            구조가 다른 두 응답을 각각 공통 타입으로 변환한 뒤, 같은 차트
            컴포넌트에 함께 전달합니다.
          </Typography>
          <BaseLineChart model={combinedModel} yAxisTitle="Metric Value" />
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
