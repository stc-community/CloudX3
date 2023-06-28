<script setup lang="ts">
import { getDaoContract, getReadonlyDaoContract } from "@/utils/contract/dao";
import type { DAO } from "@/utils/contract/dao";
import { reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { transIpfsToHttp } from "@/utils/shared";
import { transMapToArrWithInput, transMapToArr } from "@/utils/shared";
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
const userMetata = reactive([]);

// load DAO information
onMounted(async () => {
  data.loading = true;
  const contract = await getReadonlyDaoContract();
  data.dao = await contract.getDao(route.params.id);
  data.loading = false;

  getImageSource(data.dao.image);
  getJsonArr(data.dao.jsoninfo);
});

// load user information in this DAO
onMounted(() => {
  // FIXME 需要等待一段时间后才能正确获取 writeable 的示例，估计跟加载的生命周期有关，待优化
  window.setTimeout(() => {
    loadUserNFT();
  }, 1000);
});
const loadingUserNFT = ref(true);
const loadUserNFT = async () => {
  loadingUserNFT.value = true;
  const contract = await getDaoContract();

  const [soul, _f] = await contract.getUserNft(route.params.id);
  loadingUserNFT.value = false;

  const metadataStr = soul.metadata;

  if (!metadataStr) {
    return;
  }

  const metadataObj = JSON.parse(window.atob(metadataStr));
  userMetata.length = 0;
  userMetata.push(...transMapToArr(metadataObj));
};

const submitting = ref(false);
const handleClickSubmit = async () => {
  const inputMap = {};
  fields.forEach(f => {
    inputMap[f.k] = f.input;
  });

  const metadata = window.btoa(JSON.stringify(inputMap));

  submitting.value = true;
  const contract = await getDaoContract();
  const transaction = await contract.createUserNft(
    data.dao.image,
    route.params.id,
    metadata,
    ""
  );

  const res = await transaction.wait();
  submitting.value = false;
  console.log("createUserNft", res);
  window.location.reload();
};

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
</script>

<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li>
        <RouterLink :to="{ name: 'dao.dao' }">DAOs</RouterLink>
      </li>
      <li>DAO Detail</li>
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
    </div>
  </div>

  <!-- user dao -->
  <progress
    v-if="loadingUserNFT && !data.loading"
    class="progress max-w-md mt-5"
  />
  <div v-else class="border-t border-slate-200 pt-10 mt-10">
    <template v-if="userMetata.length">
      <div
        class="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
      >
        <div class="card-body">
          <h2 class="card-title">
            {{ t("market.My Info in") }} {{ data.dao.name }}
          </h2>
          <div class="divider" />

          <div v-for="v in userMetata" class="mb-2">
            <p class="font-bold">{{ v.k }}</p>
            <p class="text-slate-200">{{ v.v }}</p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="fields.length">
      <h3 class="mt-10 text-3xl">Join {{ data.dao.name }}</h3>
      <div v-for="(i, k) in fields" class="form-control w-full max-w-md mt-2">
        <label class="label">
          <span class="text-xs font-normal">{{ i.k }}</span>
          <span class="text-xs font-normal text-slate-500">{{ i.v }}</span>
        </label>
        <input
          type="text"
          :placeholder="t('common.type here')"
          v-model="fields[k]['input']"
          class="input input-bordered w-full max-w-md"
        />
      </div>
      <progress v-if="submitting" class="progress max-w-md mt-5" />
      <button
        v-else
        class="btn btn-primary w-full max-w-md mt-5"
        @click="handleClickSubmit"
      >
        {{ t("common.submit") }}
      </button>
    </template>
  </div>
</template>

<style scoped></style>
