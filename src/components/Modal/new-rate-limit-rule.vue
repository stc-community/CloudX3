<script setup lang="ts">
import { reactive, onBeforeUnmount } from "vue";
import { getCurrentSiteName } from "@/utils/shared";
import { getFuseLimitConrtact } from "@/utils/contract/fuse-limit-abi";
import { getRequestID } from "@/utils/contract/web3";
import eventBus from "@/utils/event-bus";

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
        <h3>New Rate Limit Rule</h3>
      </div>

      <div class="form-control w-full mt-5">
        <label class="label">
          <span class="label-text">Service</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          v-model="form.unique_id"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Max Count in Duration</span>
        </label>
        <input
          type="number"
          v-model="form.server_config.max"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Sample Duration (Seconds)</span>
        </label>
        <input
          type="number"
          v-model="form.server_config.duration"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Enabled this rule</span>
        </label>
        <select
          class="select w-full max-w-xs select-primary"
          v-model="form.server_limiter_is_open"
        >
          <option disabled>Pick your rate limit status</option>
          <option :value="1" selected>On</option>
          <option :value="2">Off</option>
        </select>
      </div>

      <div class="mt-5" />
      <progress v-if="data.loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        Submit
      </button>
      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">Transaction</p>
        <span class="text-xs text-primary break-all">{{ data.hash }}</span>

        <p class="uppercase mt-5">Waitting Submitting Status</p>
        <pre v-if="data.resReady" class="text-xs text-primary break-all">{{
          data.res
        }}</pre>
        <progress v-else class="progress progress-primary" />
      </div>
    </div>
  </div>
</template>
