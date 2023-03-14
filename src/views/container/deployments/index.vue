<script setup lang="ts">
import { reactive } from "vue";
import mockList from "./mock.js";

interface Deployment {
  metadata: {
    name: string; // 名称
    namespace: string; // 命名空间
    creationTimestamp: string; // 创建时间
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
    selector: {
      // Selector
      matchLabels: {
        [key: string]: string;
      };
    };
  };
}

interface Data {
  deployments: Array<Deployment>;
}

const data: Data = reactive({
  deployments: []
});

data.deployments = mockList;

const getStatusPercent = d => {
  const ready = d.status?.readyReplicas || 0;
  const total = d.status?.replicas;
  let percent = Math.floor(ready / total) * 100;

  if (percent === 0) percent = 10;
  if (percent === 100) percent = 99;

  return percent;
};

const transMapToArr = obj => {
  return Object.keys(obj).map(k => {
    return {
      k,
      v: obj[k]
    };
  });
};
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div class="card shadow-md row-span-1 border" v-for="d in data.deployments">
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

        <p class="text-sm font-semibold mt-5">Selector</p>
        <div class="max-h-[200px] overflow-y-auto">
          <p
            v-for="label in transMapToArr(d.spec.selector.matchLabels)"
            class="mb-2 leading-3 break-all text-xs"
          >
            {{ label.k }} : {{ label.v }}
          </p>
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

        <p class="text-sm font-semibold mt-5">Status</p>
        <div>
          <div
            class="radial-progress"
            :class="getStatusPercent(d) < 90 ? 'text-warning' : 'text-success'"
            :style="{ '--value': getStatusPercent(d) }"
          >
            {{ d.status?.readyReplicas || 0 }} / {{ d.status.replicas }}
          </div>
          <p class="mt-2">Ready/Total</p>
        </div>
      </div>
    </div>
  </div>
</template>
