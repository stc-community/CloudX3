<script setup lang="ts">
import { usePodLogs } from "@/hooks/usePodLogs";

const { data, loading, getPodLogs } = usePodLogs();

getPodLogs();
</script>

<template>
  <h2>{{ $route.meta.title }}</h2>
  <div
    class="bg-slate-700 min-h-screen mt-5 rounded-md text-green-500 p-5 overflow-x-auto"
  >
    <p class="text-base" v-if="loading">
      Logs
      <span
        class="border inline-block w-2 h-2 bg-green-500 rounded animate-pulse"
      />
    </p>
    <pre class="break-all">{{ data?.data }}</pre>
  </div>
</template>
