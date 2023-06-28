<script setup lang="ts">
import { reactive, onBeforeUnmount } from "vue";
import { getCurrentSiteName } from "@/utils/shared";
import { getFuseLimitConrtact } from "@/utils/contract/fuse-limit-abi";
import { getRequestID } from "@/utils/contract/web3";
import eventBus from "@/utils/event-bus";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

const form = reactive({
  unique_id: "",
  api_config: {},
  server_config: {
    max: 0,
    duration: 0
  },
  api_limiter_is_open: 2,
  server_limiter_is_open: 1
});

const data = reactive({
  res: "",
  loading: false,
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
    console.log("on chain event", event);
    const name = event.fragment.name;
    if (name !== "RequestFulfilled") return;

    data.resReady = true;
    eventBus.emit("refreshServices", true);
    const [_id, res] = event.args;
    data.res = res;
  });
};

// gw
const handleSubmit = async () => {
  data.loading = true;

  data.requestID = getRequestID();
  contract = await getFuseLimitConrtact();

  listenIfNeeded();

  try {
    const transaction = await contract.rateLimitRule(
      getCurrentSiteName("gw"),
      window.btoa(JSON.stringify(form)),
      data.requestID
    );

    await transaction.wait();
    data.hash = transaction.hash;
    data.loading = false;
  } catch (e) {
    data.loading = false;
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="new-rate-limit-rule-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="new-rate-limit-rule-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="simple-icons:speedtest"
          width="25px"
          height="25px"
        />
        <h3>{{ t("mesh.new rate limit rule") }}</h3>
      </div>

      <div class="form-control w-full mt-5">
        <label class="label">
          <span class="label-text">{{ t("mesh.service") }}</span>
        </label>
        <input
          type="text"
          :placeholder="t('common.type here')"
          v-model="form.unique_id"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">{{ t("mesh.Max Count in Duration") }}</span>
        </label>
        <input
          type="number"
          v-model="form.server_config.max"
          :placeholder="t('common.type here')"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">{{ t("mesh.Sample Duration") }}</span>
        </label>
        <input
          type="number"
          v-model="form.server_config.duration"
          :placeholder="t('common.type here')"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">{{ t("mesh.Enabled this rule") }}</span>
        </label>
        <select
          class="select w-full max-w-xs select-primary"
          v-model="form.server_limiter_is_open"
        >
          <option disabled>{{ t("mesh.Pick your rate limit status") }}</option>
          <option :value="1" selected>{{ t("common.on") }}</option>
          <option :value="2">{{ t("common.off") }}</option>
        </select>
      </div>

      <div class="mt-5" />
      <progress v-if="data.loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        {{ t("common.submit") }}
      </button>
      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">{{ t("common.transaction") }}</p>
        <span class="text-xs text-primary break-all">{{ data.hash }}</span>

        <p class="uppercase mt-5">{{ t("common.wait submit status") }}</p>
        <pre v-if="data.resReady" class="text-xs text-primary break-all">{{
          data.res
        }}</pre>
        <progress v-else class="progress progress-primary" />
      </div>
    </div>
  </div>
</template>
