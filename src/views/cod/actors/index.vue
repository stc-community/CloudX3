<script setup lang="ts">
import { reactive, ref, onMounted, watch } from "vue";
import { loadData } from "@/utils/shared";

import MessageVerified from "@/components/MessageVerified.vue";
import { useModalStore } from "@/store/modules/modal";
import type { ActorInfo, HoleInfo } from "./type";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const modalStore = useModalStore();

const loading = ref(true);
const actors: Array<ActorInfo> = reactive([]);

onMounted(async () => {
  loadData(actors, "cod.actor.list", null, loading);
});

const loadingHoles = ref(false);
const holes = reactive([]);
onMounted(() => {
  loadingHoles.value = true;
  loadData(holes, "cod.hole.list", null, loadingHoles);
});
const getHole = (name: string) => {
  return holes.find(i => i.metadata.name === name.toLowerCase());
};

// 处理打洞
const digHoleRes = reactive({
  code: 0,
  message: "",
  data: ""
});
const submitting = ref(false);
const handleClickExposeHttp = (port: number, name: string) => {
  submitting.value = true;
  loadData(
    digHoleRes,
    "cod.hole.add",
    {
      port,
      name: name.toLowerCase()
    },
    submitting
  );
};
watch(submitting, v => {
  if (!v) {
    if (digHoleRes.code !== 1001) {
      window.alert(JSON.stringify(digHoleRes));
      return;
    }

    // 请求完成啦
    window.location.reload();
  }
});

const onCallFunction = (h: HoleInfo) => {
  modalStore.setHole(h);
};
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <progress v-if="loading" class="progress row-span-1" />
    <div
      class="card shadow-md row-span-1 border border-primary"
      v-for="a in actors"
    >
      <MessageVerified
        :event="a.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="simple-icons:wasmer"
            width="30px"
            height="30px"
          />
          {{ a.actor_name }}
          <span class="badge badge-primary text-white">{{ a.count }}</span>
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="Actor ID">
          <span class="text-slate-600 text-sm break-all leading-3">{{
            a.actor_id
          }}</span>
        </div>
        <div class="tooltip text-left tooltip-left" data-tip="OCI">
          <div class="badge badge-primary badge-outline break-all">
            {{ a.actor_ociref }}
          </div>
        </div>

        <progress
          v-if="loadingHoles || submitting"
          class="progress max-w-md mt-5"
        />
        <template v-else-if="!getHole(a.actor_name)">
          <input
            type="number"
            v-model="a.port"
            :placeholder="t('common.port')"
            class="input input-primary mt-5"
          />

          <button
            class="btn btn-primary"
            @click="handleClickExposeHttp(a.port, a.actor_name)"
          >
            <IconifyIconOnline
              class="mr-2"
              icon="material-symbols:step-out"
              width="25px"
              height="25px"
            />
            {{ t("wasm.Expose Http") }}
          </button>
        </template>
        <template v-else-if="getHole(a.actor_name)">
          <div class="badge badge-primary text-xs">
            {{ getHole(a.actor_name)?.metadata?.name }}.{{
              getHole(a.actor_name)?.metadata?.namespace
            }}
          </div>

          <label
            for="cod-call-modal"
            class="btn btn-primary mt-5"
            @click="onCallFunction(getHole(a.actor_name))"
          >
            <IconifyIconOnline
              class="mr-2"
              icon="mdi:function"
              width="25px"
              height="25px"
            />
            {{ t("wasm.Call Function") }}
          </label>
        </template>

        <p class="text-sm font-semibold mt-5">
          {{ t("wasm.More Information") }}
        </p>
        <div>
          <div
            class="tooltip tooltip-left text-left flex items-center"
            data-tip="Host"
          >
            <IconifyIconOnline
              class="text-slate-500 flex-shrink-0"
              icon="tabler:server-2"
              width="30px"
              height="30px"
            />
            <span class="break-all ml-3 text-xs leading-3">{{
              a.host_id
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
