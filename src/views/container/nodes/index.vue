<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import type { Event } from "nostr-tools";

interface Node {
  event: Event;
  name: string;
  ip: string;
  status: string;
  role: string;
  cpu: string;
  memory: string;
  pod: string;
}

const loading = ref(true);
const nodes: Array<Node> = reactive([]);
let page = 1;
const limit = 9;

const loadOnePage = () => {
  loadData(
    nodes,
    "cloud.node.list",
    {
      page,
      limit
    },
    loading
  );

  console.log(nodes);
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
    <div class="card shadow-md row-span-1 border relative" v-for="d in nodes">
      <MessageVerified
        :event="d.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <h2 class="card-title text-primary text-sm">
          <IconifyIconOnline
            icon="tabler:server-2"
            width="30px"
            height="30px"
          />
          {{ d.name }}
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="Namespace">
          <div class="badge badge-primary badge-outline break-all">
            {{ d.ip }}
          </div>
        </div>

        <p class="text-sm font-semibold mt-5">Information</p>
        <div>
          <div
            class="tooltip tooltip-left text-left flex items-center"
            data-tip="Pod IP"
          >
            <span>Role:</span>
            <span class="break-all ml-3 text-slate-500 leading-3">{{
              d.role
            }}</span>
          </div>
          <div
            class="tooltip tooltip-left text-left flex items-center"
            data-tip="Host IP"
          >
            <span>Status:</span>
            <span class="break-all ml-3 text-slate-500 leading-3">{{
              d.status
            }}</span>
          </div>
        </div>

        <div class="mt-3 grid grid-cols-3 text-center">
          <div v-for="v in ['cpu', 'memory', 'pod']">
            <div
              class="radial-progress"
              :class="parseFloat(d[v]) > 50 ? 'text-warning' : 'text-success'"
              :style="{ '--value': parseFloat(d[v]) }"
            >
              {{ d.cpu }}
            </div>
            <p class="text-slate-500 text-xs mt-2">
              {{ v.toUpperCase() }} Usage
            </p>
          </div>
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
