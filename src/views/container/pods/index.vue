<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { loadData, transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import Status from "./components/status.vue";
import eventBus from "@/utils/event-bus";
import { Pod } from "./type";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const loading = ref(true);
const pods: Array<Pod> = reactive([]);
let page = 1;
const limit = 9;
const name = "nginx";

const loadOnePage = () => {
  loadData(
    pods,
    "cloud.pod.list",
    {
      page,
      limit,
      name
    },
    loading
  );
};

onMounted(async () => {
  loadOnePage();
});

const loadMore = () => {
  loading.value = true;

  page++;
  loadOnePage();
};

// 监听到事件刷新页面
eventBus.on("podSuccess", _status => {
  console.log("on event", _status);
  pods.length = 0; // clear
  page = 1;
  loadOnePage();
});
onBeforeUnmount(() => {
  eventBus.off("podSuccess");
});

const onMonitor = pod => {
  eventBus.emit("showPodMonitor", pod);
};
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <Status class="mt-5" />
  <div>
    <label for="pod-modal" class="btn btn-primary mt-5">
      <IconifyIconOnline
        class="mr-2"
        icon="material-symbols:add-circle"
        width="30px"
        height="30px"
      />{{ t("container.new pod") }}
    </label>
  </div>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div class="card shadow-md row-span-1 border" v-for="d in pods">
      <MessageVerified
        :event="d.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <h2 class="card-title text-primary text-sm">
          <IconifyIconOnline icon="ion:cube" width="30px" height="30px" />
          {{ d.metadata.name }}
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="Namespace">
          <div class="badge badge-primary badge-outline break-all">
            {{ d.metadata.namespace }}
          </div>
        </div>

        <label
          for="monitor-modal"
          class="btn btn-primary w-[150px] mt-2"
          @click="onMonitor(d)"
        >
          <IconifyIconOnline
            icon="ph:chart-line-bold"
            class="mr-2"
            width="25px"
            height="25px"
          />
          {{ t("container.monitor") }}</label
        >

        <p class="text-sm font-semibold mt-5">
          {{ t("container.information") }}
        </p>
        <div>
          <div
            class="tooltip tooltip-left text-left flex items-center"
            data-tip="Host IP"
          >
            <IconifyIconOnline
              class="text-slate-500 flex-shrink-0"
              icon="tabler:server-2"
              width="28px"
              height="28px"
            />
            <span class="break-all ml-3 font-bold text-slate-500 leading-3">{{
              d.status.hostIP
            }}</span>
          </div>
          <div
            class="tooltip tooltip-left text-left flex items-center"
            data-tip="Pod IP"
          >
            <IconifyIconOnline
              class="text-slate-500 flex-shrink-0 mt-2"
              icon="ion:cube"
              width="28px"
              height="28px"
            />
            <span class="break-all ml-3 font-bold text-slate-500 leading-3">{{
              d.status.podIP
            }}</span>
          </div>
        </div>

        <p class="text-sm font-semibold mt-5">{{ t("container.labels") }}</p>
        <div class="max-h-[200px] overflow-y-auto">
          <p
            v-for="label in transMapToArr(d.metadata.labels)"
            class="mb-2 leading-3 break-all text-xs"
          >
            {{ label.k }} : {{ label.v }}
          </p>
        </div>
      </div>
    </div>

    <div class="card shadow-md row-span-1 border">
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
