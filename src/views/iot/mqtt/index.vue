<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
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

const tabePageComponent = computed(() => {
  const tab = route.params.tab as string;
  return tabsMap[tab] || ServicePage;
});
</script>

<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="tabs tabs-boxed mt-5">
    <a
      class="tab"
      :class="{ 'tab-active': $route.params.tab === i }"
      v-for="i in Object.keys(tabsMap)"
      >{{ i }}</a
    >
  </div>

  <component :is="tabePageComponent" />
</template>

<style scoped></style>
