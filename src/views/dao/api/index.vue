<script setup lang="ts">
import { getReadonlyDaoContract } from "@/utils/contract/dao";
import { onMounted, reactive, ref } from "vue";
import type { DAO } from "@/utils/contract/dao";
import { transIpfsToHttp } from "@/utils/shared";
import axios from "axios";
import { useLang } from "@/hooks/useLang";

const { t } = useLang();

const list: Array<DAO> = reactive([]);
const imageUrls = reactive([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  const contract = await getReadonlyDaoContract();
  const res = await contract.getAllDaos();

  list.push(...res);

  loading.value = false;
  getImageSource();
});

const getImageSource = async () => {
  list.forEach((d, k) => {
    if (!d.image) return;

    axios.get(transIpfsToHttp(d.image)).then(res => {
      const imageUrl = res.data.image;
      imageUrls[k] = transIpfsToHttp(imageUrl);
    });
  });
};
</script>
<template>
  <h2>{{ t("market." + $route.meta.title.toLowerCase()) }}</h2>

  <label for="new-api-provider-modal" class="btn btn-primary mt-5">
    <IconifyIconOnline
      class="mr-2"
      icon="material-symbols:add-circle"
      width="30px"
      height="30px"
    />{{ t("market.new-provider") }}
  </label>

  <div class="grid grid-cols-4 gap-10 mt-5">
    <progress v-if="loading" class="progress" />
    <div v-for="(d, k) in list" class="card card-compact shadow-xl">
      <figure class="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px]">
        <img :src="imageUrls[k]" v-if="imageUrls[k]" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ d.name }}</h2>
        <p>{{ d.description }}</p>
        <div class="card-actions justify-end">
          <RouterLink
            class="btn btn-primary hover:text-white"
            :to="{ name: 'dao.api.detail', params: { id: d.daoId } }"
            >{{ $t("common.enter") }}</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
