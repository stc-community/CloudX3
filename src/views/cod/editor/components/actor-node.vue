<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";

defineProps<{
  data: {
    title: string;
    caps: string[];
  };
}>();
</script>

<template>
  <div class="border-2 border-primary rounded-lg px-4 py-3 active:shadow-2xl">
    <div class="font-bold text-sm mb-3 flex items-center">
      <IconifyIconOnline
        class="text-primary mr-2"
        icon="simple-icons:wasmer"
        width="25px"
        height="25px"
      />
      {{ data.title }}
    </div>

    <div
      v-for="(v, i) in data.caps"
      :key="i"
      class="bg-slate-200 py-3 mb-1 rounded-md flex items-center relative"
    >
      <IconifyIconOnline
        class="ml-2 mr-2 text-primary"
        icon="mdi:code-tags"
        width="14px"
        height="14px"
      />
      <div class="text-xs">{{ v }}</div>
      <Handle
        :id="`a-${i}`"
        type="source"
        :position="Position.Right"
        class="h-3 w-3 bg-primary"
      />
    </div>
  </div>
</template>

<style scoped></style>
