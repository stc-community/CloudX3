<script setup lang="ts">
import { reactive } from "vue";

type ActorInfo = {
  actor_id: string;
  actor_name: string;
  actor_ociref: string;
  count: number;
  host_id: string;
  id: string;
  is_hotwatched: boolean;
};

const actors: Array<ActorInfo> = reactive([]);

actors.push({
  actor_id: "MCFMFDWFHGKELOXPCNCDXKK5OFLHBVEWRAOXR5JSQUD2TOFRE3DFPM7E",
  actor_name: "kvcounter",
  actor_ociref: "wasmcloud.azurecr.io/kvcounter:0.4.0",
  count: 1,
  host_id: "NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6",
  id: "MCFMFDWFHGKELOXPCNCDXKK5OFLHBVEWRAOXR5JSQUD2TOFRE3DFPM7E (NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6)",
  is_hotwatched: false
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div class="card shadow-md row-span-1" v-for="a in actors">
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
            <span class="break-all ml-3 text-[10px] leading-3">{{
              a.host_id
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
