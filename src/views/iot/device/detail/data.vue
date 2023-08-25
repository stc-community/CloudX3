<script setup lang="ts">
import IgntCrud from "@/components/IgntCrud.vue";
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>

  <IgntCrud
    store-name="StccommunityIotdepinprotocolIotdepinprotocol"
    item-name="Kv"
  />

  <div class="divider" />

  <IgntCrud
    store-name="StccommunityIotdepinprotocolIotdepinprotocol"
    item-name="Device"
  />
</template>
