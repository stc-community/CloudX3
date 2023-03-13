<script setup lang="ts">
// vertical layout
import { useRoute } from "vue-router";
import { loadModuleRoutes } from "@/router/utils";

const route = useRoute();

const parentRoute = name => {
  return name.split(".")[0];
};

const children: Array<RouteConfigsTable> = loadModuleRoutes().find(
  i => i.name === parentRoute(route.name)
)?.children;
</script>
<template>
  <div class="container mx-auto py-10">
    <div class="flex">
      <ul class="menu bg-base-100 w-56 p-2 rounded-box">
        <li>
          <router-link v-for="(m, k) in children" :key="k" :to="m.path">
            <IconifyIconOnline :icon="m.meta.icon" width="20px" height="20px" />
            {{ m.meta.title }}
          </router-link>
        </li>
      </ul>
      <div
        class="w-full border-l border-transparent/10 pl-10 min-h-[calc(100vh-500px)]"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
