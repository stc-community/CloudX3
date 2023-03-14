<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { loadData } from "@/utils/shared";
import type { Event } from "nostr-tools";
import MessageVerified from "@/components/MessageVerified.vue";

type ActorInfo = {
  event: Event;
  actor_id: string;
  actor_name: string;
  actor_ociref: string;
  count: number;
  host_id: string;
  id: string;
  is_hotwatched: boolean;
};

const loading = ref(true);
const actors: Array<ActorInfo> = reactive([]);

onMounted(async () => {
  loadData(actors, "cod.actor.list", null, loading);
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <progress v-if="loading" class="progress row-span-1" />

    <div
      class="card shadow-md row-span-1 border border-primary"
      v-for="a in actors"
    >
      <span class="badge badge-primary text-white absolute right-[-5px]">{{
        a.count
      }}</span>
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="simple-icons:wasmer"
            width="30px"
            height="30px"
          />
          {{ a.actor_name }}
          <MessageVerified :event="a.event" />
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

        <button class="btn btn-primary mt-5">
          <IconifyIconOnline
            class="mr-2"
            icon="material-symbols:step-out"
            width="25px"
            height="25px"
          />
          Expose Http
        </button>
        <button class="btn btn-primary mt-5">
          <IconifyIconOnline
            class="mr-2"
            icon="mdi:function"
            width="25px"
            height="25px"
          />
          Call Function
        </button>

        <p class="text-sm font-semibold mt-5">More Information</p>
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
