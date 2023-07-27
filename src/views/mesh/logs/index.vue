<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { loadData } from "@/utils/shared";
import dayjs from "dayjs";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const data = reactive({
  logs: [],
  disabled: true,
  page: 1,
  limit_num: 3
});
const loading = ref(false);

const loadMore = async () => {
  loadServiceLogs();
};

const form = reactive({
  unique_id: "",
  start_time: dayjs().subtract(5, "minutes").unix(),
  end_time: dayjs().unix()
});

const loadServiceLogs = async () => {
  loading.value = true;
  loadData(
    data.logs,
    "log.log.list",
    {
      unique_id: form.unique_id,
      start_time: form.start_time,
      end_time: form.end_time,
      page: data.page,
      limit_num: data.limit_num
    },
    loading
  );
  data.page++;
};

onMounted(async () => {
  loadServiceLogs();
});

const onSearch = () => {
  data.logs.length = 0;
  data.page = 1;
  loadServiceLogs();
};
const onChangeTimerange = e => {
  const value = e.target.value;
  form.start_time = dayjs().subtract(value, "minutes").unix();
  form.end_time = dayjs().unix();
};
</script>

<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="flex items-end space-x-5 mt-10 mb-10">
    <input
      type="text"
      :placeholder="t('mesh.Type your service id here')"
      class="input input-bordered w-[300px]"
      v-model="form.unique_id"
    />

    <select
      class="select select-bordered w-full max-w-xs"
      @change="onChangeTimerange"
    >
      <option value="5" selected>{{ t("mesh.Last 5 minutes") }}</option>
      <option value="30">{{ t("mesh.Last 30 minutes") }}</option>
      <option value="60">{{ t("mesh.Last 1 hour") }}</option>
    </select>

    <button class="btn btn-square btn-primary" @click="onSearch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th class="w-[50px]" />
          <th>{{ t("mesh.Service") }}</th>
          <th>{{ t("mesh.Message") }}</th>
          <th>{{ t("mesh.Time") }}</th>
        </tr>
      </thead>
      <tbody class="text-xs">
        <tr v-for="(i, k) in data.logs || []">
          <th>{{ k + 1 }}</th>
          <td>{{ i.uniqueId }}</td>
          <td class="w-8/12">
            <p class="break-all line-clamp-2">{{ i.message }}</p>
          </td>
          <td>
            <span class="w-[240px] inline-block">{{ i.timestamp }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary mt-10" :disabled="loading" @click="loadMore">
      <span v-if="loading" class="loading loading-spinner" />
      {{ t("common.loadmore") }}
    </button>
  </div>
</template>
