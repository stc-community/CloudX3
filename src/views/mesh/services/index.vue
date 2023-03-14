<script setup lang="ts">
import { useNostrStore } from "@/store/modules/nostr";
import { onMounted, reactive } from "vue";
import type { Event } from "nostr-tools";
import { formatTime } from "@/utils/shared";
import { showEventModal } from "@/utils/shared";

const data = reactive({
  services: [],
  disabled: true,
  page: 1,
  limit_num: 3
});

const nostrStore = useNostrStore();

const handleLoadService = async () => {
  loadService();
};

const loadService = async () => {
  const nostr = await nostrStore.asyncGetNostrInstance();

  nostr.request(
    {
      m: "site",
      c: "service",
      a: "list",
      content: {
        page: data.page,
        limit_num: data.limit_num
      }
    },
    function (event: Event) {
      const content = JSON.parse(event?.content);
      const services = content.data?.list || [];

      services.forEach(s => {
        s.event = event;
        data.services.push(s);
      });
    }
  );

  data.page++;
};

onMounted(async () => {
  window.setTimeout(async () => {
    await loadService();
    data.disabled = false;
  }, 2000);
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="form-control w-1/3 mt-5">
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
    <div
      class="card bg-base-100 shadow-xl col-span-1"
      v-for="(s, i) in data.services"
    >
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
        <div class="leading-5">
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
        <div class="text-slate-500 text-sm">
          <p>Security Control Status:</p>
          <input
            type="checkbox"
            class="toggle toggle-primary toggle-md mt-2"
            :checked="s.ca === 'good'"
          />
        </div>
        <div class="text-slate-500 text-sm">
          <p>Communicaiton Way:</p>
          <div class="btn-group mt-2">
            <button class="btn btn-active">HTTP</button>
            <button class="btn">HTTPS</button>
            <button class="btn normal-case">mTLS</button>
          </div>
        </div>

        <p class="text-sm font-semibold mt-5" v-if="0">Running Status</p>
        <div class="mt-4 flex justify-between text-center" v-if="0">
          <div>
            <div class="radial-progress text-success" style="--value: 70">
              70%
            </div>
            <p class="mt-2">CPU</p>
          </div>

          <div>
            <div class="radial-progress text-error" style="--value: 10">
              10%
            </div>
            <p class="mt-2">Memory</p>
          </div>

          <div>
            <div class="radial-progress text-warning" style="--value: 30">
              30%
            </div>
            <p class="mt-2">Key</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl col-span-1">
      <div class="card-body">
        <button
          class="btn btn-primary btn-lg mt-20"
          :disabled="data.disabled"
          @click="handleLoadService"
        >
          <IconifyIconOnline
            class="mr-2"
            icon="material-symbols:add-circle"
            width="30px"
            height="30px"
          />
          LOAD Service
        </button>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Services count per fetch</span>
          </label>
          <input
            type="number"
            v-model="data.limit_num"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  </div>
</template>
