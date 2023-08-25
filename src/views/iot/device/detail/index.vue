<script setup lang="ts">
import VerticalLayout from "@/components/PageLayout/vertical-with-site.vue";
import iotRoutes from "@/router/modules/iot";

const menus = iotRoutes.children.find(i => i.name === "iot.devices.detail");
</script>
<template>
  <VerticalLayout :menus="menus.children" from="iot" />
</template>
