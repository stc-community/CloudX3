<script setup lang="ts">
import { useModalStore } from "@/store/modules/modal";
import { getCodConrtact } from "@/utils/contract/cod";
import { getRequestID } from "@/utils/contract/web3";
import { reactive, onBeforeUnmount, computed } from "vue";
import { getConfig } from "@/config";
import { useNostrStore } from "@/store/modules/nostr";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

defineOptions({
  name: "cod-call"
});

const eventStore = useModalStore();

const data = reactive({
  res: "",
  loading: false,
  // hash: "0x634647f1eef0655c27adac3531b3f1de45f209e4cea971870fa012d8ba90b986",
  hash: "",
  requestID: "",
  requestData: "",
  requestPath: "",
  resReady: false
});

let contract;
onBeforeUnmount(() => {
  contract?.off("*");
});

const listenIfNeeded = () => {
  if (!contract) return;

  contract.on("*", event => {
    const id = event.log.args[0];

    if (id === data.requestID) {
      data.resReady = true;
      handleCheck();
    }
  });
};

const domain = computed(() => {
  const hole = eventStore.getHole;
  return `http://${hole?.metadata.name}.${hole?.metadata.namespace}/`;
});

const getCurrentSiteName = () => {
  const relays = getConfig().Relay;
  const url = useNostrStore().getUrl;
  const relay = relays.find(i => i.url.includes(url));

  if (!relay?.name) {
    window.alert("No site selected!");
    throw new Error("No site selected!");
  }

  return "gw" + relay?.name.substring(2) || "";
};

const handleSubmit = async () => {
  data.loading = true;

  data.requestID = getRequestID();
  contract = await getCodConrtact();

  listenIfNeeded();

  try {
    // console.log(
    //   data.requestID,
    //   getCurrentSiteName(),
    //   `${domain.value}${data.requestPath}`,
    //   "GET",
    //   window.btoa(data.requestData)
    // );

    const transaction = await contract.CallCOD(
      data.requestID,
      getCurrentSiteName(),
      `${domain.value}${data.requestPath}`,
      "GET",
      window.btoa(data.requestData)
    );

    await transaction.wait();
    data.hash = transaction.hash;
    data.loading = false;
  } catch (e) {
    data.loading = false;
  }
};

const handleCheck = async () => {
  const res = await contract.GetResultData(data.requestID);
  data.res = res;
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="cod-call-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[600px]">
      <label
        for="cod-call-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="mdi:function"
          width="25px"
          height="25px"
        />
        <h3>{{ t("wasm.Call Function") }}</h3>
      </div>
      <div class="form-control mt-8">
        <input
          type="text"
          v-model="data.requestPath"
          :placeholder="t('wasm.Type your request path here')"
          class="input input-bordered input-primary w-full"
        />
        <p class="text-xs text-primary mt-1 mb-1">
          {{ domain }}{{ data.requestPath }}
        </p>
        <textarea
          class="textarea textarea-primary h-[100px] mt-2"
          :placeholder="t('wasm.Type your request data')"
          v-model="data.requestData"
        />
        <div class="mt-2">
          <progress
            v-if="data.loading"
            class="progress progress-primary row-span-1"
          />
          <button
            v-else
            class="btn btn-primary w-full mt-5"
            @click="handleSubmit"
          >
            {{ t("common.submit") }}
          </button>
        </div>
      </div>
      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">{{ t("common.transaction") }}</p>
        <a
          class="link link-primary text-xs break-all leading-3"
          target="_blank"
          :href="`https://sepolia.etherscan.io/tx/${data.hash}`"
          >{{ data.hash }}</a
        >

        <p class="uppercase mt-5">{{ t("wasm.Request ID") }}</p>
        <p class="text-xs text-primary break-all">{{ data.requestID }}</p>

        <p class="uppercase mt-5">{{ t("wasm.Result") }}</p>
        <pre v-if="data.resReady" class="text-xs text-primary break-all">{{
          data.res
        }}</pre>
        <progress v-else class="progress progress-primary" />
      </div>
    </div>
  </div>
</template>
