<script setup lang="ts">
import Location from "./components/location.vue";
import NostrComponent from "./components/nostr.vue";
import CurrentSite from "./components/current-site.vue";
import TotalSites from "./components/total-sites.vue";
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <!-- just for debug -->
  <NostrComponent v-if="0" />
  <div class="w-full mt-5">
    <Location />
    <h2 class="mt-10 mb-5 uppercase">Current Site</h2>
    <CurrentSite />

    <h2 class="mt-10 mb-5 uppercase">Total</h2>
    <TotalSites />
  </div>
</template>
