<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { formatTime } from "@/utils/shared";
import { showEventModal } from "@/utils/shared";
import { loadData } from "@/utils/shared";
import bus from "@/utils/event-bus";

const data = reactive({
  services: [],
  disabled: true,
  page: 1,
  limit_num: 3
});
const loading = ref(false);

const loadMore = async () => {
  loadService();
};

const loadService = async () => {
  loading.value = true;
  loadData(
    data.services,
    "site.service.list",
    {
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
onMounted(async () => {
  loadService();
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="form-control w-1/3 mt-5" v-if="0">
    <div class="input-group w-full">
      <input
        type="text"
        placeholder="Search…"
        class="input input-bordered w-full"
      />
      <button class="btn btn-square">
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
            Verified
          </label>
        </h2>
        <p class="text-sm text-slate-400">{{ s.unique_id }}</p>

        <p class="text-sm font-semibold mt-5">Metadata</p>
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

        <p class="text-sm font-semibold mt-5">Security</p>
        <label
          for="mesh-modal"
          class="btn btn-primary btn-outline"
          @click="handleManage(s)"
          >Manage</label
        >
        <div
          class="grid grid-cols-2 text-slate-500 text-xs border border-slate-300 rounded-md p-5"
        >
          <div>
            <p>Cert Status</p>
            <input
              type="checkbox"
              class="toggle toggle-primary toggle-md mt-2"
              :checked="s.ca_active"
            />
          </div>
          <div>
            <p>Listen Mode</p>
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
          />Load More
        </button>
      </div>
    </div>
  </div>
</template>
