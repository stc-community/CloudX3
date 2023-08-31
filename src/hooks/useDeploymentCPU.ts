import { reactive, ref } from "vue";
import { useDeploymentShared } from "./useDeploymentShared";

export function useDeploymentCPU() {
  const { fetchAndSetDeploymentMonitorChartData } = useDeploymentShared();

  const loadingCPU = ref(false);

  const cpuCharts = reactive({
    series: [],
    options: {}
  });

  const getDeploymentCPUChartData = () => {
    loadingCPU.value = true;
    fetchAndSetDeploymentMonitorChartData(
      "pod_cpu_usage",
      loadingCPU,
      cpuCharts
    );
  };

  return {
    loadingCPU,
    getDeploymentCPUChartData,
    cpuCharts
  };
}
