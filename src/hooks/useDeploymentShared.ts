import { loadData } from "@/utils/shared";
import { reactive, type Ref } from "vue";
import dayjs from "dayjs";

type ApiChartsData = {
  metric: {
    pod: string;
  };
  values: [number, string][];
}[];

interface ChartReactive {
  series: any[];
  options: any;
}

export function useDeploymentShared() {
  const data = reactive({});
  const fetchAndSetDeploymentMonitorChartData = (
    filter,
    loadingRef: Ref,
    chartRef: ChartReactive
  ) => {
    loadingRef.value = true;
    loadData(
      data,
      "cloud.monitor.deploymentmonitor",
      {
        start: dayjs(new Date()).subtract(1, "hour").unix(),
        end: dayjs(new Date()).unix(),
        metrics_filter: "%5E" + filter + "$",
        namespace: "oam",
        deployment: "oam-apiserver"
      },
      loadingRef,
      () => {
        // @ts-ignore
        const results = data.data.results[0].data.result as ApiChartsData;
        const series = [];
        const timeSeries = [];

        results.forEach((r, k) => {
          const name = r.metric.pod;
          const values = r.values;
          const data = [];

          values.forEach(v => {
            if (k === 0) {
              timeSeries.push(new Date(v[0] * 1000).toISOString());
            }
            data.push(v[1]);
          });

          series.push({
            name,
            data
          });
        });

        const options = {
          chart: {
            height: 200,
            type: "area",
            toolbar: { show: false }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            type: "datetime",
            categories: timeSeries
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm"
            }
          }
        };

        chartRef.options = options;
        chartRef.series = series;
      }
    );
  };

  return {
    fetchAndSetDeploymentMonitorChartData
  };
}
