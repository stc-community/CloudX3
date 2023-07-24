<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";

defineProps<{
  data: {
    title: string;
  };
}>();
</script>

<template>
  <div class="border-2 border-info rounded-lg px-4 py-3 active:shadow-2xl">
    <div class="font-bold text-sm flex items-center">
      <IconifyIconOnline
        class="text-info mr-2"
        icon="ri:earth-line"
        width="25px"
        height="25px"
      />
      {{ data.title }}
    </div>

    <Handle
      id="cap"
      type="target"
      :position="Position.Left"
      class="h-3 w-3 bg-info"
    />
  </div>
</template>

<style scoped></style>
