import { reactive, ref } from "vue";
import { useDeploymentShared } from "./useDeploymentShared";

export function useDeploymentNetSent() {
  const { fetchAndSetDeploymentMonitorChartData } = useDeploymentShared();

  const loadingNetSent = ref(false);

  const netSentCharts = reactive({
    series: [],
    options: {}
  });

  const getDeploymentNetSentChartData = () => {
    loadingNetSent.value = true;
    fetchAndSetDeploymentMonitorChartData(
      "pod_net_bytes_transmitted",
      loadingNetSent,
      netSentCharts
    );
  };

  return {
    loadingNetSent,
    getDeploymentNetSentChartData,
    netSentCharts
  };
}
