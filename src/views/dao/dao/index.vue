<script setup lang="ts">
import { getReadonlyDaoContract } from "@/utils/contract/dao";
import { onMounted, reactive, ref } from "vue";
import type { DAO } from "@/utils/contract/dao";
import { transMapToArr } from "@/utils/shared";

const list: Array<DAO> = reactive([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  const contract = await getReadonlyDaoContract();
  const res = await contract.getDao();
  list.push(...res);

  loading.value = false;
});

const decodeJsonInfo = jsoninfo => {
  const map = window.atob(jsoninfo);
  try {
    return transMapToArr(JSON.parse(map));
  } catch (e) {
    return [];
  }
};
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>

  <label for="newdao-modal" class="btn btn-primary mt-5">
    <IconifyIconOnline
      class="mr-2"
      icon="material-symbols:add-circle"
      width="30px"
      height="30px"
    />Create DAO
  </label>

  <div class="grid grid-cols-3 gap-4 mt-5">
    <progress v-if="loading" class="progress" />
    <div v-for="d in list" class="card shadow-md row-span-1 border">
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="eos-icons:organisms"
            width="30px"
            height="30px"
          />
          {{ d.name }}
        </h2>
        <div class="break-all mt-2 text-slate-600 font-bold">
          {{ d.description }}
        </div>
        <div class="divider mt-0 mb-0" />
        <div class="text-slate-500">
          <div v-for="item in decodeJsonInfo(d.jsoninfo)">
            <span>{{ item.k }}</span>
            <span class="mx-1">=</span>
            <span>{{ item.v }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
