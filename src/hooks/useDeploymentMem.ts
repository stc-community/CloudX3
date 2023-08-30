import { reactive, ref } from "vue";
import { useDeploymentShared } from "./useDeploymentShared";

export function useDeploymentMem() {
  const { fetchAndSetDeploymentMonitorChartData } = useDeploymentShared();

  const loadingMem = ref(false);

  const memCharts = reactive({
    series: [],
    options: {}
  });

  const getDeploymentMemChartData = () => {
    loadingMem.value = true;
    fetchAndSetDeploymentMonitorChartData(
      "pod_memory_usage_wo_cache",
      loadingMem,
      memCharts
    );
  };

  return {
    loadingMem,
    getDeploymentMemChartData,
    memCharts
  };
}
