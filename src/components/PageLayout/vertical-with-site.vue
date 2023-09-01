<script setup lang="ts">
// vertical layout, and with site switch function
import { watch, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { loadModuleRoutes } from "@/router/utils";
import { useAccountStore } from "@/store/modules/account";
import { useLang } from "@/hooks/useLang";
import { useNostr } from "@/hooks/useNostr";
import KeplrWallet from "./keplr-wallet.vue";
import { useIotDevices } from "@/hooks/useIotDevices";

const props = defineProps<{
  menus?: RouteChildrenConfigsTable[];
  from?: "iot";
}>();

const { t } = useLang();
const { nostrStore, relay } = useNostr();
const route = useRoute();
const { data, loading, getIotDevices } = useIotDevices();
getIotDevices();

const children = computed(() => {
  if (props.menus) {
    return props.menus;
  }

  const parentRoute = name => {
    return name.split(".")[0];
  };

  const children: Array<RouteConfigsTable> = loadModuleRoutes().find(
    i => i.name === parentRoute(route.name)
  )?.children;

  return children;
});

watch(
  () => nostrStore.getUrl,
  (val: string) => {
    nostrStore.saveUrl(val);
    window.location.reload();
  }
);

const accountStore = useAccountStore();

const currentDevice = ref(route.params.name);
</script>
<template>
  <div class="container mx-auto py-10">
    <div class="flex">
      <div>
        <select
          v-if="from === 'iot'"
          class="select select-primary w-52 ml-2"
          v-model="currentDevice"
        >
          <option disabled>Pick a device</option>
          <option v-if="loading" :value="currentDevice">
            {{ currentDevice }}
          </option>
          <option v-else v-for="r in data.devices" :value="r.name">
            {{ r.name }}
          </option>
        </select>
        <select
          v-else
          class="select select-primary w-52 ml-2"
          v-model="nostrStore.url"
        >
          <option disabled>{{ t("common.pick a site") }}</option>
          <option v-for="r in relay" :value="r.url">{{ r.name }}</option>
        </select>
        <ul class="menu bg-base-100 w-56 p-2 rounded-box">
          <li>
            <router-link
              v-for="(m, k) in children"
              :key="k"
              :to="{ name: m.name, params: route.params }"
              class="my-2"
            >
              <IconifyIconOnline
                :icon="m.meta.icon"
                width="20px"
                height="20px"
              />
              {{ t("nav." + m.meta.title.toLowerCase()) }}
            </router-link>
          </li>
        </ul>
      </div>
      <div
        class="w-full border-l border-transparent/10 pl-10 min-h-[calc(100vh-500px)]"
      >
        <div
          class="alert alert-warning shadow-lg mb-10"
          v-if="!accountStore.getPrivateKey"
        >
          <div class="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{{ t("common.need key tips") }}</span>

            <label for="key-modal" class="btn btn-primary">{{
              t("common.connect")
            }}</label>
            <button />
          </div>
        </div>
        <div class="relative">
          <KeplrWallet
            v-if="from === 'iot'"
            class="absolute top-[-50px] right-0"
          />
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
