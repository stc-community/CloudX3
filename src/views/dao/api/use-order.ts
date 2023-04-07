import { getTokenContract } from "@/utils/contract/token";
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export type OrderForm = {
  daoId: number;
  marketId: number;
  totalCalls: number;
  orderPrice: number;
};

export type Order = {
  orderId: number;
  daoId: number;
  marketId: number;
  totalCalls: number;
  remainingCalls: number;
  orderPrice: number;
  buyerAddress: number;
};

export function useOrder() {
  const route = useRoute();
  const daoId = +route.params.id;

  const loadingUserOrder = ref(false);
  const userOrders: Array<Order> = reactive([]);

  const getUserOrders = async () => {
    loadingUserOrder.value = true;
    const contract = await getTokenContract();
    const res = await contract.getUserAllOrdersOnDao(daoId);

    userOrders.length = 0;
    userOrders.push(...(res || []));
    loadingUserOrder.value = false;
  };

  onMounted(() => {
    window.setTimeout(() => {
      getUserOrders();
    }, 1000);
  });

  return {
    loadingUserOrder,
    userOrders
  };
}
