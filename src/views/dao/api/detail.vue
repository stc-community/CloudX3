<script setup lang="ts">
import { getReadonlyDaoContract } from "@/utils/contract/dao";
import type { DAO } from "@/utils/contract/dao";
import { reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { transIpfsToHttp } from "@/utils/shared";
import { transMapToArrWithInput } from "@/utils/shared";
import { useApiDetail } from "./use-api-detail.ts";

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

// const tableData = [
//   {
//     name: "List my amount",
//     method: "GET",
//     url: "/my/account",
//     description: "List all accounts in your profile.",
//     price: 0.001,
//     balance: 0
//   },
//   {
//     name: "Change Model",
//     method: "PUT",
//     url: "/ai/model",
//     description: "Change the model your ai using",
//     price: 0.002,
//     balance: 0.1
//   }
// ];

// load publish status
const { checkingPublish, canPublish, loadingApiList, apiList } = useApiDetail();
</script>

<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'dao.api' }">API Provider</RouterLink>
      </li>
      <li>Detail</li>
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
          />
          Publish new API</label
        >
      </template>
    </div>
  </div>

  <div class="border-t border-slate-200 my-10" />
  <h2 class="text-3xl">APIs providered</h2>

  <div class="overflow-x-auto mt-5">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th class="w-[30px]" />
          <th class="w-[150px]">Name</th>
          <th>URL</th>
          <th>Description</th>
          <th>Price(Token/Per Request)</th>
          <th>Balance</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="v in apiList">
          <th>{{ v.marketId }}</th>
          <td>{{ v.apiName }}</td>
          <td>{{ v.apiMethod }} {{ v.apiUrl }}</td>
          <td>{{ v.description }}</td>
          <td>{{ v.price }}</td>
          <td>
            <span>{{ v.balance }}</span>
          </td>
          <td>
            <button
              class="btn btn-primary btn-outline text-xs"
              v-if="v.balance"
            >
              <IconifyIconOnline
                icon="ph:copy-simple-fill"
                width="20px"
                height="20px"
              />
              Copy API Key
            </button>
            <label
              class="btn btn-primary text-xs"
              for="new-api-scribe-modal"
              v-else
            >
              <IconifyIconOnline
                icon="material-symbols:add-shopping-cart"
                width="20px"
                height="20px"
              />
              Subscribe
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
