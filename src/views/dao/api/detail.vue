<script setup lang="ts">
import { getReadonlyDaoContract } from "@/utils/contract/dao";
import type { DAO } from "@/utils/contract/dao";
import { reactive, onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { transIpfsToHttp } from "@/utils/shared";
import { transMapToArrWithInput } from "@/utils/shared";
import { useApiDetail, TableData } from "./use-api-detail";
import { useOrder } from "./use-order";
import type { Order } from "./use-order";
import { useLang } from "@/hooks/useLang";

const { t } = useLang();

type Data = {
  loading: boolean;
  dao: DAO;
};

const route = useRoute();
const data: Data = reactive({
  loading: false,
  dao: null
});

const imageUrl = ref("");
const fields = reactive([]);

// load DAO information
onMounted(async () => {
  data.loading = true;
  const contract = await getReadonlyDaoContract();
  data.dao = await contract.getDao(route.params.id);
  data.loading = false;

  getImageSource(data.dao.image);
  getJsonArr(data.dao.jsoninfo);
});

const getImageSource = async metadata => {
  if (!metadata) return;

  axios.get(transIpfsToHttp(metadata)).then(res => {
    imageUrl.value = transIpfsToHttp(res.data.image);
  });
};

const getJsonArr = base64str => {
  const json = JSON.parse(window.atob(base64str));
  fields.length = 0;
  fields.push(...transMapToArrWithInput(json));
};

// load publish status
const { checkingPublish, canPublish, loadingApiList, apiList, onSubscribe } =
  useApiDetail();

// load user orders in this provider
const { loadingUserOrder, userOrders } = useOrder();

// Calc user blance
const tableData: Array<TableData> = computed(() => {
  if (!apiList.length) return [];

  const newArr = [];
  apiList.forEach(api => {
    const order: Order =
      userOrders.find(o => o.marketId === api.marketId) || null;
    newArr.push({
      marketId: api.marketId,
      apiName: api.apiName,
      apiMethod: api.apiMethod,
      apiUrl: api.apiUrl,
      description: api.description,
      price: api.price,
      orderId: order?.orderId,
      daoId: order?.daoId,
      totalCalls: order?.totalCalls,
      remainingCalls: order?.remainingCalls,
      orderPrice: order?.orderPrice,
      buyerAddress: order?.buyerAddress
    });
  });
  return newArr;
});
</script>

<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'dao.api' }">{{
          t("market.api market")
        }}</RouterLink>
      </li>
      <li>{{ t("common.detail") }}</li>
    </ul>
  </div>

  <progress v-if="data.loading" class="progress max-w-md" />
  <div class="flex mt-5">
    <figure class="min-h-[200px] w-[300px] flex-shrink-0">
      <img v-if="imageUrl" :src="imageUrl" class="rounded-md" />
    </figure>
    <div class="flex-shrink ml-10 mt-2 w-full" v-if="data.dao">
      <h2 class="text-3xl">{{ data.dao.name }}</h2>
      <p class="mt-5 text-lg">{{ data.dao.description }}</p>

      <progress v-if="checkingPublish" class="progress w-[200px] mt-5" />
      <template v-else>
        <label
          v-if="canPublish"
          for="new-api-modal"
          class="btn btn-primary mt-5"
        >
          <IconifyIconOnline
            icon="ic:round-file-upload"
            width="24px"
            height="24px"
            class="mr-3"
          />{{ t("market.new api") }}</label
        >
      </template>
    </div>
  </div>

  <div class="border-t border-slate-200 my-10" />
  <h2 class="text-3xl">{{ t("market.apis providered") }}</h2>

  <progress v-if="loadingApiList" class="progress max-w-sm mt-5" />
  <div class="overflow-x-auto mt-5" v-else>
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th class="w-[30px]" />
          <th class="w-[150px]">{{ t("common.name") }}</th>
          <th>URL</th>
          <th>{{ t("common.description") }}</th>
          <th>{{ t("common.price") }}(Token/{{ t("market.per request") }})</th>
          <th>{{ t("common.balance") }}</th>
          <th>{{ t("common.action") }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="v in tableData">
          <th>{{ v.marketId }}</th>
          <td>{{ v.apiName }}</td>
          <td>{{ v.apiMethod }} {{ v.apiUrl }}</td>
          <td>{{ v.description }}</td>
          <td>{{ v.price }}</td>
          <td>
            <span class="text-sm font-bold">{{ v.remainingCalls }} </span>
            <span class="text-xs text-slate-500 ml-1">/{{ v.totalCalls }}</span>
          </td>
          <td>
            <button
              class="btn btn-primary btn-outline text-xs"
              v-if="v.remainingCalls"
            >
              <IconifyIconOnline
                icon="ph:copy-simple-fill"
                width="20px"
                height="20px"
                class="mr-2"
              />
              {{ t("market.copy api key") }}
            </button>
            <label
              v-else
              @click="onSubscribe(v)"
              class="btn btn-primary text-xs"
              for="new-api-scribe-modal"
            >
              <IconifyIconOnline
                icon="material-symbols:add-shopping-cart"
                width="20px"
                height="20px"
                class="mr-2"
              />
              {{ t("common.subscribe") }}
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
