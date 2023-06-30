<script setup lang="ts">
import Location from "./components/location.vue";
import NostrComponent from "./components/nostr.vue";
import CurrentSite from "./components/current-site.vue";
import TotalSites from "./components/total-sites.vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <!-- just for debug -->
  <NostrComponent v-if="0" />
  <div class="w-full mt-5">
    <Location />
    <h2 class="mt-10 mb-5 uppercase">{{ t("mesh.current site") }}</h2>
    <CurrentSite />

    <h2 class="mt-10 mb-5 uppercase">{{ t("mesh.total") }}</h2>
    <TotalSites />
  </div>
</template>
