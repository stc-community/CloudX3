<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import type { Event } from "nostr-tools";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

type ProviderInfo = {
  event: Event;
  contract_id: string;
  host_id: string;
  id: string;
  link_name: string;
  provider_id: string;
  provider_name: string;
  status: string;
};

const loading = ref(true);
const providers: Array<ProviderInfo> = reactive([]);

onMounted(async () => {
  loadData(providers, "cod.provider.list", null, loading);
});
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <progress v-if="loading" class="progress row-span-1" />

    <div
      class="card shadow-md relative border border-primary"
      v-for="p in providers"
    >
      <MessageVerified
        :event="p.event"
        class="absolute right-[-10px] top-[-10px]"
      />

      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="healthicons:provider-fst"
            width="30px"
            height="30px"
          />
          {{ p.provider_name }}
        </h2>
        <div class="tooltip text-left tooltip-left" data-tip="provider id">
          <span class="text-slate-600 text-sm break-all leading-3">{{
            p.provider_id
          }}</span>
        </div>
        <div class="tooltip text-left tooltip-left" data-tip="contract id">
          <div class="badge badge-primary badge-outline">
            {{ p.contract_id }}
          </div>
        </div>
        <div class="badge badge-success text-white">{{ p.status }}</div>

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
              p.host_id
            }}</span>
          </div>

          <div
            class="tooltip tooltip-left text-left flex mt-2 items-center"
            data-tip="Link Name"
          >
            <IconifyIconOnline
              class="text-slate-500 flex-shrink-0"
              icon="mdi:link-box-variant"
              width="30px"
              height="30px"
            />
            <span class="break-all ml-3">{{ p.link_name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
