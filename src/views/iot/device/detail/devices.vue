<script setup lang="ts">
import IgntCrud from "@/components/IgntCrud.vue";
</script>
<template>
  <h2>Authorized Devices</h2>
  <p class="text-slate-500 mt-2 leading-6">
    In this section, you can create and manage unique authentication tokens for
    your authorized devices. These tokens act as digital keys, ensuring that
    only trusted devices can send messages to your project and have them
    accepted.
  </p>

  <IgntCrud
    store-name="StccommunityIotdepinprotocolIotdepinprotocol"
    item-name="Device"
  />
</template>
