<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { loadData, transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import eventBus from "@/utils/event-bus";

import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const data = reactive({
  devices: [],
  disabled: true,
  page: 1,
  limit_num: 30
});
const loading = ref(false);

const loadDevices = async () => {
  data.devices = [];

  loading.value = true;
  loadData(
    data.devices,
    "iot.device.list",
    {
      page: data.page,
      limit_num: data.limit_num
    },
    loading
  );
  data.page++;
};

onMounted(async () => {
  loadDevices();
});

const loadMore = async () => {
  loadDevices();
};

// 监听到事件刷新页面
eventBus.on("refreshDevices", _status => {
  loadDevices();
});
onBeforeUnmount(() => {
  eventBus.off("refreshDevices");
});
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <label for="device-modal" class="btn btn-primary mt-5">
    <IconifyIconOnline
      class="mr-2"
      icon="mingcute:plugin-fill"
      width="20px"
      height="20px"
    />{{ t("iot.new device") }}
  </label>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div v-for="d in data.devices" class="card shadow-md row-span-1 border">
      <MessageVerified
        :event="d.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="mingcute:device-line"
            width="30px"
            height="30px"
          />
          {{ d.name }}
        </h2>
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
    <div class="card shadow-md row-span-1 border" v-if="0">
      <div class="card-body">
        <progress v-if="loading" class="progress row-span-1" />

        <button class="btn w-full mt-10" :disabled="loading" @click="loadMore">
          <IconifyIconOnline
            class="mr-2"
            icon="material-symbols:add-circle"
            width="30px"
            height="30px"
          />{{ t("common.loadmore") }}
        </button>
      </div>
    </div>
  </div>
</template>
