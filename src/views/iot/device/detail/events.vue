<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import CronjobPage from "./components/cronjob-page.vue";

const route = useRoute();
const tabsMap = {
  "Cron Job": CronjobPage,
  "Smart Contract Monitor": CronjobPage,
  "Client Height Monitor": CronjobPage
};

const activeTab = computed(() => {
  return (route.query.tab as string) || "Cron Job";
});

const tabePageComponent = computed(() => {
  return tabsMap[activeTab.value] || CronjobPage;
});
</script>
<template>
  <h2>Event Sources</h2>
  <p class="text-slate-500 mt-2 leading-6">
    You can create various W3bstream events that can be generated from diverse
    sources: through an HTTP or MQTT data message or utizing internal sources
    such as the Cron Job or Smart Contract Monitor.
  </p>

  <div class="form-control mt-5">
    <label class="label">
      <span class="label-text">HTTP</span>
    </label>
    <label class="label">
      <span class="label-text-alt font-normal">Route</span>
    </label>
    <input
      type="text"
      class="input input-bordered w-full text-sm"
      value="https://devnet-prod-api.w3bstream.com/event/eth_0x84538466c7f31c355d1c7abdb35f33849a4da508_firstiot"
    />
  </div>

  <div class="form-control mt-5">
    <label class="label">
      <span class="label-text">MQTT</span>
    </label>
    <label class="label">
      <span class="label-text-alt font-normal">URL</span>
    </label>
    <input
      type="text"
      class="input input-bordered w-full text-sm"
      value="mqtt://devnet-prod-mqtt.w3bstream.com:1883"
    />
    <label class="label">
      <span class="label-text-alt font-normal">Topic</span>
    </label>
    <input
      type="text"
      class="input input-bordered w-full text-sm"
      value="eth_0x84538466c7f31c355d1c7abdb35f33849a4da508_firstiot"
    />
  </div>

  <div class="tabs mt-5">
    <router-link
      class="tab tab-bordered"
      :class="{ 'tab-active': activeTab === i }"
      :key="k"
      v-for="(i, k) in Object.keys(tabsMap)"
      :to="{ name: 'iot.device.events', query: { tab: i } }"
    >
      {{ i }}
    </router-link>
  </div>

  <component :is="tabePageComponent" class="mt-5" />
</template>
