<script setup lang="ts">
import { reactive } from "vue";

type ProviderInfo = {
  contract_id: string;
  host_id: string;
  id: string;
  link_name: string;
  provider_id: string;
  provider_name: string;
  status: string;
};

const providers: Array<ProviderInfo> = reactive([]);

providers.push({
  contract_id: "wasmcloud:httpserver",
  host_id: "NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6",
  id: "VAG3QITQQ2ODAOWB5TTQSDJ53XK3SHBEIFNK4AYJ5RKAX2UNSCAPHA5M (default) (NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6)",
  link_name: "default",
  provider_id: "VAG3QITQQ2ODAOWB5TTQSDJ53XK3SHBEIFNK4AYJ5RKAX2UNSCAPHA5M",
  provider_name: "HTTP Server",
  status: "Healthy"
});
providers.push({
  contract_id: "wasmcloud:keyvalue",
  host_id: "NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6",
  id: "VAZVC4RX54J2NVCMCW7BPCAHGGG5XZXDBXFUMDUXGESTMQEJLC3YVZWB (default) (NBPEU7NMBJ3NKX3MOXD4KUZZI6KNEOATCDQ6C2GSM5LCFVSJUNIZPLO6)",
  link_name: "default",
  provider_id: "VAZVC4RX54J2NVCMCW7BPCAHGGG5XZXDBXFUMDUXGESTMQEJLC3YVZWB",
  provider_name: "Redis KeyValue Store",
  status: "Healthy"
});
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="grid grid-cols-3 gap-4 mt-5">
    <div
      class="card shadow-md relative border border-primary"
      v-for="p in providers"
    >
      <span
        class="badge badge-success text-white absolute right-[-5px] top-[-5px]"
        >{{ p.status }}</span
      >
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
