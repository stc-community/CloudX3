import { reactive, ref } from "vue";
import { loadData } from "@/utils/shared";

export function useIotDevices() {
  const data = reactive({
    devices: [],
    page: 1,
    limit_num: 30
  });
  const loading = ref(false);

  const getIotDevices = async () => {
    data.devices = [];

    loading.value = true;
    loadData(
      data.devices,
      "iot.device.list",
      {
        page: data.page,
        limit_num: data.limit_num
      },
      loading
    );
    data.page++;
  };

  return {
    data,
    loading,
    getIotDevices
  };
}
