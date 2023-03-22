<script setup lang="ts">
import { getDaoContract, getReadonlyDaoContract } from "@/utils/contract/dao";
import type { DAO, UserNFT } from "@/utils/contract/dao";
import { reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { transIpfsToHttp } from "@/utils/shared";
import { transMapToArrWithInput } from "@/utils/shared";

type Data = {
  loading: boolean;
  dao: DAO;
  userNFT: UserNFT;
};

const route = useRoute();
const data: Data = reactive({
  loading: false,
  dao: null,
  userNFT: {
    tokenId: 0,
    daoId: 0,
    user: "",
    metadata: "",
    image: ""
  }
});

const imageUrl = ref("");
const fields = reactive([]);
const showForm = ref(false);

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
  loadUserNFT();
});
const loadingUserNFT = ref(false);
const loadUserNFT = async () => {
  loadingUserNFT.value = true;
  const contract = await getReadonlyDaoContract();
  const [soul, _f] = await contract.getUserNft(route.params.id);
  const all = await contract.getUserAllNft();

  console.log("get userNFT", soul);
  console.log("get getUserAllNft", all);
  if (soul) {
    Object.assign(data.userNFT, soul);
  }
  loadingUserNFT.value = false;
};

const handleClickSubmit = async () => {
  const inputMap = {};
  fields.forEach(f => {
    inputMap[f.k] = f.input;
  });

  const metadata = window.btoa(JSON.stringify(inputMap));

  console.log("params", data.dao.image, route.params.id, metadata, "");

  const contract = await getDaoContract();
  const transaction = await contract.createUserNft(
    "data.dao.image",
    0,
    "metadata",
    ""
  );

  const res = await transaction.wait();
  // window.location.reload();

  console.log("createUserNft", res);
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
  <progress v-if="loadingUserNFT" class="progress max-w-md mt-5" />

  {{ fields }}

  <div class="border-t border-slate-200 mt-10 mb-10" />
  <template v-if="fields.length && !data.userNFT.metadata">
    <h3 class="mt-10 text-3xl">Join {{ data.dao.name }} DAO</h3>
    <div v-for="(i, k) in fields" class="form-control w-full max-w-md mt-2">
      <label class="label">
        <span class="text-xs font-normal">{{ i.k }}</span>
        <span class="text-xs font-normal text-slate-500">{{ i.v }}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        v-model="fields[k]['input']"
        class="input input-bordered w-full max-w-md"
      />
    </div>
    <button
      class="btn btn-primary w-full max-w-md mt-5"
      @click="handleClickSubmit"
    >
      Submit
    </button>
  </template>

  <template v-if="data.userNFT.metadata">
    <div
      class="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
    >
      <div class="card-body">
        <h2 class="card-title">My Information</h2>
        <div class="leading-8">
          <p>
            <span class="font-bold">TokenID</span
            ><span>{{ data.userNFT.tokenId }}</span>
          </p>
          <p>
            <span class="font-bold">DaoID</span
            ><span>{{ data.userNFT.daoId }}</span>
          </p>
          <p>
            <span class="font-bold">User</span
            ><span>{{ data.userNFT.user }}</span>
          </p>
          <p>
            <span class="font-bold">Metadata</span
            ><span>{{ data.userNFT.metadata }}</span>
          </p>
          <p>
            <span class="font-bold">Image</span
            ><span>{{ data.userNFT.image }}</span>
          </p>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped></style>
