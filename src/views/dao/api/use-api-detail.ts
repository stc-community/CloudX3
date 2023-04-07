import { getDaoContract } from "@/utils/contract/dao";
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export function useApiDetail() {
  const route = useRoute();
  const daoID = route.params.id;

  const checkingPublish = ref(false);
  const canPublish = ref(false);
  const checkPublish = async () => {
    checkingPublish.value = true;
    const contract = await getDaoContract();
    canPublish.value = await contract.checkToCreateMarket(daoID);
    checkingPublish.value = false;
  };

  const loadingApiList = ref(false);
  const apiList = reactive([]);
  const getProviderApiList = async () => {
    loadingApiList.value = true;
    const contract = await getDaoContract();
    const res = await contract.getMarketApiByDao(daoID);
    apiList.length = 0;
    apiList.push(...(res || []));
    loadingApiList.value = false;
  };

  onMounted(() => {
    // FIXME 需要等待一段时间后才能正确获取 writeable 的示例，估计跟加载的生命周期有关，待优化
    window.setTimeout(() => {
      checkPublish();
      getProviderApiList();
    }, 1000);
  });

  return {
    checkingPublish,
    canPublish,
    loadingApiList,
    apiList
  };
}
