<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData, transMapToArr } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";

import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const data = reactive({
  deployments: [],
  disabled: true,
  page: 1,
  limit_num: 30
});
const loading = ref(false);

const loadService = async () => {
  loading.value = true;
  loadData(
    data.deployments,
    "iot.mqtt.deployment",
    {
      page: data.page,
      limit_num: data.limit_num
    },
    loading
  );
  data.page++;
};

onMounted(async () => {
  loadService();
});

const getStatusPercent = d => {
  const ready = d.status?.readyReplicas || 0;
  const total = d.status?.replicas;
  let percent = Math.floor(ready / total) * 100;

  if (percent === 0) percent = 10;
  if (percent === 100) percent = 99;

  return percent;
};

const loadMore = async () => {
  loadService();
};
</script>
<template>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div v-for="d in data.deployments" class="card shadow-md row-span-1 border">
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
