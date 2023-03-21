<script setup lang="ts">
import { getReadonlyDaoContract } from "@/utils/contract/dao";
import type { DAO } from "@/utils/contract/dao";
import { reactive, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { transIpfsToHttp } from "@/utils/shared";
import { transMapToArr } from "@/utils/shared";

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
const showForm = ref(false);

let contract;
onMounted(async () => {
  data.loading = true;
  contract = await getReadonlyDaoContract();
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
  fields.push(...transMapToArr(json));
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

      <button
        v-if="!showForm"
        class="btn btn-primary mt-5 btn-wide"
        @click="showForm = true"
      >
        Join This DAO
      </button>

      <template v-if="fields.length && showForm">
        <h3 class="mt-10">Please fill in your information</h3>
        <div v-for="(i, k) in fields" class="form-control w-full max-w-md mt-2">
          <label class="label">
            <span class="text-xs font-normal">{{ i.k }}</span>
            <span class="text-xs font-normal text-slate-500">{{ i.v }}</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-md"
          />
        </div>
        <button class="btn btn-primary w-full max-w-md mt-5">Submit</button>
      </template>
    </div>
  </div>

  <div class="border-t border-slate-200 mt-10 mb-10" />
  <template v-if="data.dao">
    <h2>My NFTs in {{ data.dao.name }}</h2>
    <progress class="progress max-w-md mt-5" />
  </template>
</template>

<style scoped></style>
