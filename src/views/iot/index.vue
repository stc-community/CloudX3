<script setup lang="ts">
import { useNostr } from "@/hooks/useNostr";

useNostr();
</script>
<template>
  <div class="container mx-auto py-10">
    <RouterView />
  </div>
</template>
