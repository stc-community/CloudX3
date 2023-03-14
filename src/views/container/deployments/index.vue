<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData, transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import type { Event } from "nostr-tools";

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

onMounted(async () => {
  loadData(
    deployments,
    "cloud.deployment.list",
    {
      page,
      limit: 3
    },
    loading
  );
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
  loadData(
    deployments,
    "cloud.deployment.list",
    {
      page,
      limit: 3
    },
    loading
  );
};

const isSOL = d => {
  if (!d.metadata.labels) {
    return false;
  }

  return d.metadata?.labels["managed-by"] === "sol";
};
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div
      v-for="d in deployments"
      class="card shadow-md row-span-1 border"
      :class="{ 'border-primary': isSOL(d) }"
    >
      <span
        v-if="isSOL(d)"
        class="badge text-white badge-primary badge-lg absolute right-[-5px] top-[-10px]"
        >Managed By SOL</span
      >
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="ic:outline-autorenew"
            width="30px"
            height="30px"
          />
          {{ d.metadata.name }}

          <MessageVerified :event="d.event" />
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="Namespace">
          <div class="badge badge-primary badge-outline break-all">
            {{ d.metadata.namespace }}
          </div>
        </div>

        <p class="text-sm font-semibold mt-5">Labels</p>
        <div class="max-h-[100px] overflow-y-auto">
          <p
            v-for="label in transMapToArr(d?.metadata?.labels)"
            class="mb-2 leading-3 break-all text-xs"
          >
            {{ label.k }} : {{ label.v }}
          </p>
        </div>

        <p class="text-sm font-semibold mt-5">Status</p>
        <div>
          <div
            class="radial-progress"
            :class="getStatusPercent(d) < 90 ? 'text-warning' : 'text-success'"
            :style="{ '--value': getStatusPercent(d) }"
          >
            {{ d.status?.readyReplicas || 0 }} / {{ d.status.replicas }}
          </div>
          <p class="mt-2 text-slate-500 text-xs">Ready/Total</p>
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
          />Load More
        </button>
      </div>
    </div>
  </div>
</template>
