<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import img from "@/assets/logo.jpg";
import { isUrl } from "@pureadmin/utils";
import { changeTheme, getCurrentTheme } from "@/utils/theme";
import type { Theme } from "@/utils/theme";
import { site } from "@/config/site";
import { loadModuleRoutes } from "@/router/utils";
import { HeaderItems } from "@/config/header";
import ThemeComponent from "./theme.vue";
import AvatarComponent from "./avatar.vue";
import LangComponent from "./lang.vue";

import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const moduleMenus = loadModuleRoutes().map((route: RouteConfigsTable) => {
  return {
    title: route.meta.title,
    to: route.path
  };
});

const menus = [...moduleMenus, ...HeaderItems.menus];

onMounted(() => {
  const theme: Theme = getCurrentTheme() as Theme;
  changeTheme(theme);
});
</script>

<template>
  <div class="navbar container mx-auto flex items-center py-2 justify-between">
    <!-- left logo -->
    <router-link class="flex space-x-4 items-center" to="/">
      <img :src="img" alt="logo" class="rounded-lg" width="30" />
      <h2 class="text-sm">{{ site.name }}</h2>
    </router-link>
    <!-- menus -->
    <div class="flex gap-16 font-semibold items-center text-[15px]">
      <template v-for="(v, k) in menus">
        <a
          v-if="isUrl(v.to)"
          :key="k"
          :href="v.to"
          target="_blank"
          class="hover:text-primary"
          >{{ t(v.title) }}</a
        >
        <router-link
          v-else
          :key="`k${k}`"
          :to="v.to"
          class="hover:text-primary"
        >
          {{ t("nav." + v.title.toLowerCase()) }}
        </router-link>
      </template>
    </div>
    <!-- right -->
    <div class="flex items-center">
      <LangComponent />
      <ThemeComponent class="ml-5" />
      <AvatarComponent class="ml-5" />
    </div>
  </div>
</template>
