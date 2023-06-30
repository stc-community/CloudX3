<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData } from "@/utils/shared";
import MessageVerified from "@/components/MessageVerified.vue";
import type { Event } from "nostr-tools";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

type ActorMarket = {
  event: Event;
  capabilities: Array<string>;
  name: string;
  oci: string;
  version: string;
};

const loading = ref(true);
const providers: Array<ActorMarket> = reactive([]);

onMounted(async () => {
  loadData(providers, "cod.market.actorlist", null, loading);
});

const decodeCaps = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
};
</script>
<template>
  <h2>{{ t("nav." + $route.meta.title.toLowerCase()) }}</h2>
  <label class="btn btn-primary mt-5" for="new-actor-modal">
    <IconifyIconOnline
      icon="simple-icons:wasmer"
      width="20px"
      height="20px"
      class="mr-3"
    />{{ t("wasm.New Actor") }}
  </label>
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
            icon="simple-icons:wasmer"
            width="30px"
            height="30px"
          />
          {{ p.name }}
          <div class="badge badge-primary text-white">{{ p.version }}</div>
        </h2>

        <div class="badge badge-outline">{{ p.oci }}</div>
        <div
          v-for="v in decodeCaps(p.capabilities)"
          class="badge badge-secondary text-white mr-1"
        >
          {{ v }}
        </div>
      </div>
    </div>
  </div>
</template>
