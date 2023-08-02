<script setup lang="ts">
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
</script>

<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="tabs tabs-boxed mt-5">
    <a class="tab">Config Map</a>
    <a class="tab tab-active">Deployment</a>
    <a class="tab">Service</a>
    <a class="tab">Edge Device</a>
  </div>
</template>

<style scoped></style>
