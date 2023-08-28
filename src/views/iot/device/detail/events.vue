<script setup lang="ts">
import IgntCrud from "@/components/IgntCrud.vue";
</script>
<template>
  <h2>Event Sources</h2>
  <p class="text-slate-500 mt-2 leading-6">
    You can create various W3bstream events that can be generated from diverse
    sources: through an HTTP or MQTT data message or utizing internal sources
    such as the Cron Job or Smart Contract Monitor.
  </p>

  <IgntCrud
    store-name="StccommunityIotdepinprotocolIotdepinprotocol"
    item-name="EventPb"
  />
</template>
