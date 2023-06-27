<script setup lang="ts">
import logo from "@/assets/logo.jpg";
import { BottomItems } from "@/config/bottom";
import { ref } from "vue";
import { site } from "@/config/site";

const org = ref(BottomItems.org);
</script>

<template>
  <footer class="footer footer-center p-10">
    <div>
      <img :src="logo" alt="logo" width="50" height="50" class="rounded-lg" />
      <p class="font-bold">{{ site.name }}<br />{{ site.description }}</p>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </div>
    <div class="grid grid-flow-col gap-4">
      <a v-if="org.github" :href="org.github" target="_blank">
        <IconifyIconOnline
          icon="mdi:github"
          width="30px"
          height="30px"
          class="hover:text-slate-500"
        />
      </a>

      <a v-if="org.twitter" :href="org.twitter" target="_blank">
        <IconifyIconOnline
          icon="mdi:twitter"
          width="30px"
          height="30px"
          class="hover:text-blue-500"
      /></a>
      <a v-if="org.linkedin" :href="org.linkedin" target="_blank">
        <IconifyIconOnline
          icon="mdi:linkedin"
          width="30px"
          height="30px"
          class="hover:text-blue-600"
      /></a>
      <a v-if="org.youtube" :href="org.youtube" target="_blank">
        <IconifyIconOnline
          icon="mdi:youtube"
          width="30px"
          height="30px"
          class="hover:text-red-600"
      /></a>
    </div>
  </footer>
</template>
