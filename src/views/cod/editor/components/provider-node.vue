<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";

defineProps<{
  data: {
    title: string;
    cap: string;
  };
}>();
</script>

<template>
  <div class="border-2 border-primary rounded-lg px-4 py-3">
    <div class="font-bold text-sm mb-3 flex items-center">
      <IconifyIconOnline
        class="text-primary mr-2"
        icon="healthicons:provider-fst"
        width="25px"
        height="25px"
      />
      {{ data.title }}
    </div>

    <div class="bg-slate-100 py-3 mb-1 rounded-md flex items-center relative">
      <IconifyIconOnline
        class="ml-4 mr-2 text-primary"
        icon="mdi:code-tags"
        width="14px"
        height="14px"
      />
      <div class="text-xs">{{ data.cap }}</div>
      <Handle
        id="cap"
        type="target"
        :position="Position.Left"
        class="h-3 w-3 bg-primary"
      />
    </div>
  </div>
</template>

<style scoped></style>
