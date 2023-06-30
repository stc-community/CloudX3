<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import type { Event } from "nostr-tools";
import { loadData } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

type HostInfo = {
  event: Event;
  host_id: string;
  labels: {
    "hostcore.arch": string;
    "hostcore.os": string;
    "hostcore.osfamily": string;
    kubernetes: string;
  };
};

const loading = ref(true);
const hosts: Array<HostInfo> = reactive([]);

onMounted(async () => {
  loadData(hosts, "cod.host.info", null, loading);
});
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <progress v-if="loading" class="progress row-span-1" />

    <div
      class="card bg-base-100 shadow-md row-span-1 border border-primary"
      v-for="(h, i) in hosts"
    >
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="tabler:server-2"
            width="30px"
            height="30px"
          />
          Host {{ i + 1 }}

          <MessageVerified :event="h.event" />
        </h2>
        <p class="text-sm break-all text-slate-600">{{ h.host_id }}</p>

        <p class="text-sm font-semibold mt-5">{{ t("wasm.Information") }}</p>
        <div class="leading-6 text-slate-500">
          <p>
            {{ t("wasm.arch") }}:
            <span class="text-base-content">{{
              h.labels["hostcore.arch"]
            }}</span>
          </p>
          <p>
            {{ t("wasm.os") }}:
            <span class="text-base-content">{{ h.labels["hostcore.os"] }}</span>
          </p>
          <p>
            {{ t("wasm.os-family") }}:
            <span class="text-base-content">{{
              h.labels["hostcore.osfamily"]
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
