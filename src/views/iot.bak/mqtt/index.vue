<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import ConfigmapPage from "./configmap-page.vue";
import DeploymentPage from "./deployment-page.vue";
import ServicePage from "./service-page.vue";
import EdgeServicePage from "./edgeservice-page.vue";
import { useLang } from "@/hooks/useLang";

const { t } = useLang();
const route = useRoute();

const tabsMap = {
  service: ServicePage,
  deployment: DeploymentPage,
  configmap: ConfigmapPage,
  edgeservice: EdgeServicePage
};

const activeTab = computed(() => {
  return (route.query.tab as string) || "service";
});

const tabePageComponent = computed(() => {
  return tabsMap[activeTab.value] || ServicePage;
});

const getTabText = tab => {
  const map = {
    service: "Service",
    deployment: "Deployment",
    configmap: "Configmap",
    edgeservice: "Edge Service"
  };

  return map[tab];
};
</script>

<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="tabs tabs-boxed mt-5">
    <RouterLink
      class="tab"
      :class="{ 'tab-active': activeTab === i }"
      :key="k"
      v-for="(i, k) in Object.keys(tabsMap)"
      :to="{ name: 'iot.mqtt', query: { tab: i } }"
      >{{ getTabText(i) }}</RouterLink
    >
  </div>

  <component :is="tabePageComponent" class="mt-5" />
</template>

<style scoped></style>
