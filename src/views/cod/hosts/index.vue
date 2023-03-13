<script setup lang="ts">
import { reactive } from "vue";

type HostInfo = {
  host_id: string;
  labels: {
    "hostcore.arch": string;
    "hostcore.os": string;
    "hostcore.osfamily": string;
    kubernetes: string;
  };
};

const hosts: Array<HostInfo> = reactive([]);

hosts.push({
  host_id: "NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6",
  labels: {
    "hostcore.arch": "x86_64",
    "hostcore.os": "linux",
    "hostcore.osfamily": "unix",
    kubernetes: "true"
  }
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div class="card bg-base-100 shadow-md row-span-1" v-for="(h, i) in hosts">
      <div class="card-body">
        <h2 class="card-title text-primary">
          <IconifyIconOnline
            icon="tabler:server-2"
            width="30px"
            height="30px"
          />
          Host {{ i + 1 }}
        </h2>
        <p class="text-sm break-all text-slate-600">{{ h.host_id }}</p>

        <p class="text-sm font-semibold mt-5">Information</p>
        <div class="leading-6 text-slate-500">
          <p>
            ARCH:
            <span class="text-base-content">{{
              h.labels["hostcore.arch"]
            }}</span>
          </p>
          <p>
            OS:
            <span class="text-base-content">{{ h.labels["hostcore.os"] }}</span>
          </p>
          <p>
            OS Famliy:
            <span class="text-base-content">{{
              h.labels["hostcore.osfamily"]
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
