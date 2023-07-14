<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";
</script>

<template>
  <div
    class="border border-slate-200 rounded-md h-[40px] w-[200px] flex items-center"
  >
    <IconifyIconOnline
      class="ml-2 mr-2 text-primary"
      icon="wpf:security-checked"
      width="14px"
      height="14px"
    />
    <div class="text-xs">Cap1</div>
    <Handle
      id="a"
      type="source"
      :position="Position.Right"
      class="h-2 w-2 bg-primary"
    />
  </div>
</template>

<style scoped></style>
