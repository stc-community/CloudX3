import { getDaoContract } from "@/utils/contract/dao";
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useModalStore } from "@/store/modules/modal";

export interface Api {
  // api info
  marketId: number;
  apiName: string;
  apiMethod: string;
  apiUrl: string;
  description: string;
  price: number;
}

export interface TableData extends Api {
  // order info
  orderId: number;
  daoId: number;
  totalCalls: number;
  remainingCalls: number;
  orderPrice: number;
  buyerAddress: number;
}

export function useApiDetail() {
  const route = useRoute();
  const daoID = route.params.id;
  const store = useModalStore();

  const checkingPublish = ref(false);
  const canPublish = ref(false);
  const checkPublish = async () => {
    checkingPublish.value = true;
    const contract = await getDaoContract();
    canPublish.value = await contract.checkToCreateMarket(daoID);
    checkingPublish.value = false;
  };

  const loadingApiList = ref(false);
  const apiList: Array<Api> = reactive([]);
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

  const onSubscribe = v => {
    store.setOrder({
      daoId: +daoID,
      marketId: v.marketId,
      orderPrice: v.price,
      totalCalls: 100
    });
  };

  return {
    checkingPublish,
    canPublish,
    loadingApiList,
    apiList,
    onSubscribe
  };
}
