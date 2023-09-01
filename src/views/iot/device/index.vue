<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import { transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import eventBus from "@/utils/event-bus";
import { useIotDevices } from "@/hooks/useIotDevices";
import { useLang } from "@/hooks/useLang";

const { t } = useLang();
const { data, loading, getIotDevices } = useIotDevices();

onMounted(async () => {
  getIotDevices();
});
// 监听到事件刷新页面
eventBus.on("refreshDevices", _status => {
  getIotDevices();
});
onBeforeUnmount(() => {
  eventBus.off("refreshDevices");
});
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <label for="device-modal" class="btn btn-primary mt-5" :class="{ loading }">
    <IconifyIconOnline
      class="mr-2"
      icon="mingcute:plugin-fill"
      width="20px"
      height="20px"
    />{{ t("iot.new device") }}
  </label>
  <div class="grid grid-cols-2 gap-4 mt-5">
    <div
      v-for="d in data.devices"
      class="card shadow-md row-span-1 border hover:shadow-2xl"
    >
      <MessageVerified
        :event="d.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <router-link
          class="card-title text-primary hover:cursor-pointer hover:text-primary-focus"
          :to="{ name: 'iot.device.metrics', params: { name: d.name } }"
        >
          <IconifyIconOnline
            icon="mingcute:device-line"
            width="30px"
            height="30px"
          />
          {{ d.name }}
        </router-link>
        <p class="text-sm font-semibold mt-5">Health</p>
        <div class="max-h-[100px] overflow-y-auto">
          <p
            v-for="label in transMapToArr(d?.health)"
            class="mb-2 leading-3 break-all text-xs"
          >
            {{ label.k }} : {{ label.v }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
