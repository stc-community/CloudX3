import { loadData } from "@/utils/shared";
import { reactive, ref } from "vue";

export function usePod() {
  const loading = ref(false);
  const data = reactive({});

  const charts = reactive({
    cpu: { series: [], options: {} },
    memory: { series: [], options: {} },
    net_transmit: { series: [], options: {} },
    net_receive: { series: [], options: {} }
  });

  const getPodMonitorChartData = pod => {
    loading.value = true;
    loadData(
      data,
      "cloud.monitor.podmonitor",
      {
        name: pod.metadata.name,
        namespace: pod.metadata.namespace
      },
      loading,
      makeChartData
    );
  };

  const makeChartData = () => {
    // @ts-ignore
    const { cpu, memory, net_transmit, net_receive } = data.data;

    const makeData = obj => {
      const _data = [];
      const _categories = [];
      obj.data.forEach(d => {
        // @ts-ignore
        _categories.push(new Date(d[0] * 1000).toISOString());
        // @ts-ignore
        _data.push(d[1]);
      });

      return {
        series: [{ name: cpu.metric_name, data: _data }],
        options: {
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
            categories: _categories
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm"
            }
          }
        }
      };
    };

    // @ts-ignore
    charts.cpu = makeData(cpu);
    // @ts-ignore
    charts.memory = makeData(memory);
    // @ts-ignore
    charts.net_transmit = makeData(net_transmit);
    // @ts-ignore
    charts.net_receive = makeData(net_receive);
  };

  return {
    loading,
    getPodMonitorChartData,
    charts
  };
}
