<script setup lang="ts">
import { onMounted, reactive, ref, onUnmounted } from "vue";
import { formatTime } from "@/utils/shared";
import { showEventModal } from "@/utils/shared";
import { loadData } from "@/utils/shared";
import bus from "@/utils/event-bus";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const data = reactive({
  services: [],
  disabled: true,
  page: 1,
  limit_num: 3,
  form: {
    name: "" // 服务名称
  }
});
const loading = ref(false);

const loadMore = async () => {
  loadService();
};

const onSearch = () => {
  data.services.length = 0;
  data.page = 1;
  loadService();
};

const loadService = async () => {
  loading.value = true;
  loadData(
    data.services,
    "site.service.list",
    {
      // unique_ids: ["s10600uwnlo5s1l522042925juhp00q3"],
      // unique_ids: ["s10500uv1jxwb2602204291k5q3a0056"],
      service_name: data.form.name,
      page: data.page,
      limit_num: data.limit_num
    },
    loading
  );
  data.page++;

  console.log(data.services);
};

const handleManage = service => {
  bus.emit("currentService", service);
};

bus.on("refreshServices", _ => {
  console.log("handle refreshServices");
  data.page = 1;
  data.services.length = 0;
  loadService();
});

onMounted(async () => {
  loadService();
});

onUnmounted(() => {
  bus.off("refreshServices");
});

// 监控相关
const onMonitor = service => {
  bus.emit("showServiceMonitor", service);
};
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="form-control w-1/3 mt-5">
    <div class="input-group w-full">
      <input
        type="text"
        v-model="data.form.name"
        :placeholder="t('mesh.searchName') + '...'"
        class="input input-bordered w-full"
      />
      <button class="btn btn-square" @click="onSearch">
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
  </div>
  <div class="grid grid-flow-row grid-cols-3 gap-4 mt-5">
    <div class="card col-span-1 shadow border" v-for="s in data.services">
      <div class="card-body">
        <h2 class="card-title">
          {{ s?.info[0]?.metadata?.service_name }}
          <label
            class="btn btn-success w-40 text-white rounded-full"
            for="event-modal"
            @click="showEventModal(s.event)"
          >
            <IconifyIconOnline
              class="mr-2"
              icon="wpf:security-checked"
              width="25px"
              height="25px"
            />
            {{ t("common.verified") }}
          </label>
        </h2>
        <p class="text-sm text-slate-400">{{ s.unique_id }}</p>

        <label
          for="service-monitor-modal"
          class="btn btn-primary w-[150px]"
          @click="onMonitor(s)"
        >
          <IconifyIconOnline
            icon="ph:chart-line-bold"
            class="mr-2"
            width="25px"
            height="25px"
          />
          {{ t("container.monitor") }}</label
        >

        <p class="text-sm font-semibold mt-5">{{ t("mesh.metadata") }}</p>
        <div class="leading-5 text-xs">
          <p class="text-slate-500">Version:</p>
          <p>{{ s.info[0].metadata?.version }}</p>

          <p class="mt-2 text-slate-500">Runtime:</p>
          <p>{{ s.info[0].metadata?.runtime }}</p>

          <p class="mt-2 text-slate-500">Hostname:</p>
          <p>{{ s.info[0]?.hostname }}</p>

          <p class="mt-2 text-slate-500">Image:</p>
          <p class="break-all">{{ s.info[0].metadata?.service_image }}</p>

          <p class="mt-2 text-slate-500">Last Heartbeat:</p>
          <p class="break-all">{{ formatTime(s.info[0].renew_timestamp) }}</p>
        </div>

        <p class="text-sm font-semibold mt-5">{{ t("mesh.security") }}</p>
        <label
          for="mesh-modal"
          class="btn btn-primary btn-outline"
          @click="handleManage(s)"
          >{{ t("mesh.manage") }}</label
        >
        <div
          class="grid grid-cols-2 text-slate-500 text-xs border border-slate-300 rounded-md p-5"
        >
          <div>
            <p>{{ t("mesh.security control") }}</p>
            <div
              class="mt-2 inline-block text-sm uppercase"
              :class="s.ca_active ? ['text-primary'] : ['']"
            >
              {{ s.ca_active ? t("mesh.enabled") : t("mesh.disabled") }}
            </div>
          </div>
          <div>
            <p>{{ t("mesh.listen mode") }}</p>
            <div class="mt-2 inline-block text-primary text-sm uppercase">
              {{ s?.info[0].metadata.mode }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card shadow-md row-span-1 border">
      <div class="card-body">
        <progress v-if="loading" class="progress row-span-1" />

        <button class="btn w-full mt-10" :disabled="loading" @click="loadMore">
          <IconifyIconOnline
            class="mr-2"
            icon="material-symbols:add-circle"
            width="30px"
            height="30px"
          />{{ t("common.loadmore") }}
        </button>
      </div>
    </div>
  </div>
</template>
