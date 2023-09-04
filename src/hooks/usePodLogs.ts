import { loadData } from "@/utils/shared";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

export type LogQueryParams = {
  namespace: string;
  pods: string;
  container: string;
  tailLines: number;
  timestamps: boolean;
};

export function usePodLogs() {
  const route = useRoute();
  const loading = ref(false);
  const data = reactive({});

  const getPodLogs = (params?: LogQueryParams) => {
    loading.value = true;
    loadData(
      data,
      "cloud.pod.log",
      {
        namespace: "deviceshifu",
        pods: params ? params.pods : route.params.name + "-0",
        container: "deviceshifu-http",
        tailLines: 30,
        timestamps: true
      },
      loading
    );
  };

  return {
    data,
    loading,
    getPodLogs
  };
}
