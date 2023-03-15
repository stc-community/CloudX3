<script setup lang="ts">
// import { reactive } from "vue";
// import mockList from "./mock.js";

// interface Pod {
//   metadata: {
//     name: string; // 名称
//     namespace: string; // 命名空间
//     creationTimestamp: string; // 创建时间
//     labels: {
//       // labels
//       [key: string]: string;
//     };
//   };
//   status: {
//     phase: string; // 当前状态
//     hostIP: string; // 节点
//     podIP: string; // 容器组IP
//   };
// }

// interface Data {
//   pods: Array<Pod>;
// }

// const data: Data = reactive({
//   pods: []
// });

// data.pods = mockList;

// const getStatusPercent = d => {
//   const ready = d.status?.readyReplicas || 0;
//   const total = d.status?.replicas;
//   let percent = Math.floor(ready / total) * 100;

//   if (percent === 0) percent = 10;
//   if (percent === 100) percent = 99;

//   return percent;
// };

// const transMapToArr = obj => {
//   return Object.keys(obj).map(k => {
//     return {
//       k,
//       v: obj[k]
//     };
//   });
// };

// const getStatusColor = (phase: string) => {
//   const map = {
//     running: "badge-success",
//     succeeded: "badge-info"
//   };

//   return map[phase.toLowerCase()] || "";
// };

import { reactive, ref, onMounted } from "vue";
import { loadData, transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import type { Event } from "nostr-tools";

interface Pod {
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
    hostIP?: string;
    podIP: string;
  };
}

const loading = ref(true);
const pods: Array<Pod> = reactive([]);
let page = 1;
const limit = 9;

const loadOnePage = () => {
  loadData(
    pods,
    "cloud.pod.list",
    {
      page,
      limit
    },
    loading
  );

  console.log(pods);
};

onMounted(async () => {
  loadOnePage();
});

const loadMore = () => {
  loading.value = true;

  page++;
  loadOnePage();
};
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div class="card shadow-md row-span-1 border" v-for="d in pods">
      <div class="card-body">
        <h2 class="card-title text-primary text-sm">
          <IconifyIconOnline icon="ion:cube" width="30px" height="30px" />
          {{ d.metadata.name }}

          <MessageVerified :event="d.event" />
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="Namespace">
          <div class="badge badge-primary badge-outline break-all">
            {{ d.metadata.namespace }}
          </div>
        </div>

        <p class="text-sm font-semibold mt-5">Information</p>
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

        <p class="text-sm font-semibold mt-5">Labels</p>
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
          />Load More
        </button>
      </div>
    </div>
  </div>
</template>
