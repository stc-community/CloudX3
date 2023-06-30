<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { getConfig } from "@/config";
import { useNostrStore } from "@/store/modules/nostr";
import { useModalStore } from "@/store/modules/modal";
import type { Event } from "nostr-tools";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

interface DataType {
  site: {
    cluster: string;
    ip: string;
    site: string;
    city: string;
    flag: string;
    s_count: number;
  };
}

const data: DataType = reactive({
  site: null
});

onMounted(async () => {
  const nostr = await useNostrStore().asyncGetNostrInstance();
  nostr.request(
    {
      m: "site",
      c: "site",
      a: "detail"
    },
    function (event: Event) {
      useModalStore().setEvent(event);
      const content = JSON.parse(event?.content);
      data.site = content?.data;
    }
  );
});

const relays = getConfig().Relay;
const url = useNostrStore().getUrl;
const relay = relays.find(i => i.url.includes(url));
</script>

<template>
  <div class="stats shadow">
    <div class="stat relative">
      <div class="stat-figure text-primary">
        <IconifyIconOnline
          icon="carbon:assembly-cluster"
          width="40px"
          height="40px"
        />
      </div>
      <div class="stat-title">{{ t("mesh.current site") }}</div>
      <div class="stat-value text-primary">
        {{ data.site?.cluster || "" }}
      </div>
      <div class="stat-desc" v-if="0">Shanghai</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <IconifyIconOnline
          icon="healthicons:provider-fst"
          width="40px"
          height="40px"
        />
      </div>
      <div class="stat-title">{{ t("mesh.servicesCount") }}</div>
      <div class="stat-value text-secondary">
        {{ data.site?.s_count }}
      </div>
      <div class="stat-desc">{{ t("mesh.services this site has") }}</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <IconifyIconOnline :icon="relay?.flag" width="40px" height="40px" />
      </div>
      <div class="stat-value">{{ relay?.city }}</div>
      <div class="stat-title">{{ t("mesh.location") }}</div>
      <div class="stat-desc text-success">{{ relay?.url }}</div>
    </div>
  </div>

  <div
    class="alert alert-success shadow-lg mt-5 text-white max-w-md"
    v-if="data.site?.cluster"
  >
    <div>
      <IconifyIconOnline
        icon="wpf:security-checked"
        width="25px"
        height="25px"
      />
      <span>{{ t("common.message verified") }}</span>
    </div>
    <div class="flex-none">
      <label for="event-modal" class="btn btn-sm btn-ghost">{{
        t("common.detail")
      }}</label>
    </div>
  </div>
</template>

<style scoped></style>
