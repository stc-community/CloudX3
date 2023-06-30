<script setup lang="ts">
import { onMounted, reactive, ref, onUnmounted } from "vue";
import { loadData } from "@/utils/shared";
import bus from "@/utils/event-bus";
import MessageVerified from "@/components/MessageVerified.vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const data = reactive({
  services: [],
  disabled: true,
  page: 1,
  limit_num: 3
});
const loading = ref(false);

const loadMore = async () => {
  loadService();
};

const loadService = async () => {
  loading.value = true;
  loadData(
    data.services,
    "govern.rate.list",
    {
      page: data.page,
      limit_num: data.limit_num
    },
    loading
  );
  data.page++;
};

bus.on("refreshServices", _ => {
  // console.log("handle refreshServices");
  data.page = 1;
  data.services.length = 0;
  loadService();
});

onMounted(async () => {
  loadService();
});

onUnmounted(() => {
  bus.off("refreshServices");
});
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <label class="btn btn-primary mt-5" for="new-rate-limit-rule-modal">
    <IconifyIconOnline
      icon="material-symbols:add-circle"
      width="25px"
      height="25px"
      class="mr-2"
    />{{ t("mesh.new rate limit rule") }}
  </label>
  <div class="grid grid-flow-row grid-cols-3 gap-4 mt-5">
    <div class="card col-span-1 shadow border" v-for="s in data.services">
      <MessageVerified
        :event="s.event"
        class="absolute right-[-10px] top-[-10px]"
      />
      <div class="card-body">
        <h2 class="card-title break-all text-primary text-md">
          {{ s.unique_id }}
        </h2>
        <div class="flex items-center">
          <span class="text-xs text-slate-500"
            >{{ t("mesh.Server Rate Limit") }}:</span
          >
          <div
            class="badge badge-primary text-xs ml-2"
            :class="
              s.server_limiter_is_open === 1
                ? 'badge-prmary'
                : 'badge-secondary'
            "
          >
            {{
              s.server_limiter_is_open === 1
                ? t("mesh.enabled")
                : t("mesh.disabled")
            }}
          </div>
        </div>

        <p class="text-sm font-semibold mt-5">{{ t("mesh.rule") }}</p>
        <div class="leading-5 text-xs">
          <p class="mt-2 text-slate-500">
            {{ t("mesh.Max Count in Duration") }}:
          </p>
          <p class="break-all">{{ s.server_config?.max || 0 }}</p>
          <p class="mt-2 text-slate-500">{{ t("mesh.Sample Duration") }}:</p>
          <p class="break-all">{{ s.server_config?.duration || 0 }}s</p>
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
