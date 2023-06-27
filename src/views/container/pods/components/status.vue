<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData } from "@/utils/shared";
import type { Event } from "nostr-tools";
import MessageVerified from "@/components/MessageVerified.vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

interface Status {
  value: {
    event: Event;
    data: {
      failed: string;
      pending: string;
      running: string;
      unknown: string;
      succeeded: string;
    };
  };
}

const loading = ref(true);
const status: Status = reactive({
  value: {
    event: null,
    data: {} as any
  }
});

onMounted(async () => {
  loadData(status.value, "cloud.monitor.pod", null, loading);
});
</script>

<template>
  <div v-if="loading" class="text-slate-500">
    <p>{{ t("container.loading pod status") }}</p>
    <progress class="progress max-w-md mt-5" />
  </div>
  <div v-else class="stats shadow">
    <div class="stat">
      <div class="stat-figure text-primary">
        <IconifyIconOnline
          icon="mdi:heart-outline"
          width="30px"
          height="30px"
        />
      </div>
      <div class="stat-title">{{ t("container.running") }}</div>
      <div class="stat-value text-primary">{{ status.value.data.running }}</div>
      <div class="stat-desc">{{ t("container.running") }} pods</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <IconifyIconOnline
          icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
          width="30px"
          height="30px"
        />
      </div>
      <div class="stat-title">{{ t("container.pending") }}</div>
      <div class="stat-value text-secondary">
        {{ status.value.data.pending }}
      </div>
      <div class="stat-desc">{{ t("container.pending") }} pods</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-error">
        <IconifyIconOnline
          icon="carbon:retry-failed"
          width="30px"
          height="30px"
        />
      </div>
      <div class="stat-title">{{ t("container.failed") }}</div>
      <div class="stat-value text-error">{{ status.value.data.failed }}</div>
      <div class="stat-desc">{{ t("container.failed") }} pods</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-slate-500">
        <IconifyIconOnline
          icon="mdi:bookmark-success-outline"
          width="30px"
          height="30px"
        />
      </div>
      <div class="stat-title">{{ t("container.succeeded") }}</div>
      <div class="stat-value text-slate-500">
        {{ status.value.data.succeeded }}
      </div>
      <div class="stat-desc">{{ t("container.succeeded") }} pods</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-pink-400">
        <IconifyIconOnline
          icon="material-symbols:unknown-document-outline"
          width="30px"
          height="30px"
        />
      </div>
      <div class="stat-title">{{ t("container.unknown") }}</div>
      <div class="stat-value text-pink-400">
        {{ status.value.data.unknown }}
      </div>
      <div class="stat-desc">{{ t("container.unknown") }} pods</div>
    </div>
    <MessageVerified
      v-if="status.value.event"
      :event="status.value.event"
      class="mt-6 mr-5"
    />
  </div>
</template>
