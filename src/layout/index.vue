<script setup lang="ts">
import FooterPage from "./components/footer.vue";
import HeaderPage from "./components/header.vue";
</script>

<template>
  <div class="text-sm relative">
    <div class="backdrop-blur border-b border-transparent/10">
      <header-page />
    </div>

    <div class="min-h-[calc(100vh-200px)]">
      <router-view />
    </div>

    <footer-page />
  </div>
</template>
