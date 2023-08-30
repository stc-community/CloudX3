import { reactive, ref } from "vue";
import { useDeploymentShared } from "./useDeploymentShared";

export function useDeploymentNetReceived() {
  const { fetchAndSetDeploymentMonitorChartData } = useDeploymentShared();

  const loadingNetReceived = ref(false);

  const netReceivedCharts = reactive({
    series: [],
    options: {}
  });

  const getDeploymentNetReceivedChartData = () => {
    loadingNetReceived.value = true;
    fetchAndSetDeploymentMonitorChartData(
      "pod_net_bytes_received",
      loadingNetReceived,
      netReceivedCharts
    );
  };

  return {
    loadingNetReceived,
    getDeploymentNetReceivedChartData,
    netReceivedCharts
  };
}
