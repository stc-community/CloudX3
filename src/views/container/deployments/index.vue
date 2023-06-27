<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { loadData, transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import type { Event } from "nostr-tools";
import eventBus from "@/utils/event-bus";

import { useLang } from "@/hooks/useLang";
const { t } = useLang();

interface Deployment {
  event: Event;
  metadata: {
    name: string; // 名称
    namespace: string; // 命名空间
    labels: {
      // labels
      [key: string]: string;
    };
  };
  status: {
    // 状态
    readyReplicas?: number; // 正在运行的
    replicas: number; // 总数
  };
  spec: {
    replicas: number;
  };
}

const loading = ref(true);
const deployments: Array<Deployment> = reactive([]);
let page = 1;
const limit = 9;

const loadOnePage = () => {
  loadData(
    deployments,
    "cloud.deployment.list",
    {
      page,
      limit
    },
    loading
  );
};

onMounted(async () => {
  page = 1;
  loadOnePage();
});

const getStatusPercent = d => {
  const ready = d.status?.readyReplicas || 0;
  const total = d.status?.replicas;
  let percent = Math.floor(ready / total) * 100;

  if (percent === 0) percent = 10;
  if (percent === 100) percent = 99;

  return percent;
};

const loadMore = () => {
  loading.value = true;

  page++;
  loadOnePage();
};

const isSOL = d => {
  if (!d.metadata.labels) {
    return false;
  }

  return d.metadata?.labels["managed-by"] === "sol";
};

// 监听到事件刷新页面
eventBus.on("deploymentSuccess", _status => {
  console.log("on event", _status);
  deployments.length = 0; // clear
  page = 1;
  loadOnePage();
});
onBeforeUnmount(() => {
  eventBus.off("deploymentSuccess");
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <label for="deployment-modal" class="btn btn-primary mt-5">
    <IconifyIconOnline
      class="mr-2"
      icon="material-symbols:add-circle"
      width="30px"
      height="30px"
    />{{ t("container.new deployment") }}
  </label>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div
      v-for="d in deployments"
      class="card shadow-md row-span-1 border"
      :class="{ 'border-primary': isSOL(d) }"
    >
      <MessageVerified
        :event="d.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="ic:outline-autorenew"
            width="30px"
            height="30px"
          />
          {{ d.metadata.name }}
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="Namespace">
          <div class="badge badge-primary badge-outline break-all">
            {{ d.metadata.namespace }}
          </div>
        </div>
        <div v-if="isSOL(d)" class="badge text-white badge-primary text-xs">
          {{ t("container.by contract") }}
        </div>

        <p class="text-sm font-semibold mt-5">{{ t("container.labels") }}</p>
        <div class="max-h-[100px] overflow-y-auto">
          <p
            v-for="label in transMapToArr(d?.metadata?.labels)"
            class="mb-2 leading-3 break-all text-xs"
          >
            {{ label.k }} : {{ label.v }}
          </p>
        </div>

        <p class="text-sm font-semibold mt-5">{{ t("common.status") }}</p>
        <div>
          <div
            class="radial-progress"
            :class="getStatusPercent(d) < 90 ? 'text-warning' : 'text-success'"
            :style="{ '--value': getStatusPercent(d) }"
          >
            {{ d.status?.readyReplicas || 0 }} / {{ d.status.replicas }}
          </div>
          <p class="mt-2 text-slate-500 text-xs">
            {{ t("container.ready") }}/{{ t("container.total") }}
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
