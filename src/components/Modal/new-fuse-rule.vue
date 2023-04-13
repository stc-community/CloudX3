<script setup lang="ts">
import { reactive, ref } from "vue";
import { getCurrentSiteName } from "@/utils/shared";

const form = reactive({
  unique_id: "",
  child_unique_id: "",
  rule_type: 1,
  max_requests: 1,
  interval: 600,
  error_percent: 10,
  serial_error_numbers: 5,
  open_timeout: 30,
  request_timeout: 5,
  target: "host",
  is_open: 1
});
const loading = ref(false);
const result = reactive({});
const handleSubmit = () => {
  console.log(getCurrentSiteName("s"));
  // loadData(result, "cod.market.actoradd", form, loading, () => {
  //   window.location.reload();
  // });
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="new-fuse-rule-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="new-fuse-rule-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="mdi:fuse-off"
          width="25px"
          height="25px"
        />
        <h3>New Fuse Rule</h3>
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
          <span class="label-text">Child Service</span>
        </label>
        <input
          type="text"
          v-model="form.child_unique_id"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Rule Type</span>
        </label>
        <select
          class="select w-full max-w-xs select-primary"
          v-model="form.rule_type"
        >
          <option disabled>Pick your fuse type</option>
          <option :value="1" selected>Consecutive Error Fuse</option>
          <option :value="2">Error Rate Fuse</option>
          <option :value="3">Consecutive Error or Error Rate Fuse</option>
          <option :value="4">Consecutive Error and Error Rate Fuse</option>
        </select>

        <label class="label mt-2">
          <span class="label-text">Error Percent Threshold. (%)</span>
        </label>
        <input
          type="text"
          v-model="form.error_percent"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Constant Error Times Threshold</span>
        </label>
        <input
          type="text"
          v-model="form.serial_error_numbers"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text"
            >The number of requests allowed to run when the fuse is half
            open</span
          >
        </label>
        <input
          type="number"
          v-model="form.max_requests"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text"
            >Clear cycle when the fuse is in the closed state (Seconds)</span
          >
        </label>
        <input
          type="number"
          v-model="form.interval"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Fuse half-open trigger time (Seconds)</span>
        </label>
        <input
          type="number"
          v-model="form.open_timeout"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Request timeout period. (Seconds)</span>
        </label>
        <input
          type="number"
          v-model="form.request_timeout"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Fuse granularity</span>
        </label>
        <select
          class="select w-full max-w-xs select-primary"
          v-model="form.target"
        >
          <option disabled>Pick your fuse granularity</option>
          <option selected>host</option>
          <option>path</option>
        </select>

        <label class="label mt-2">
          <span class="label-text">Enabled</span>
        </label>
        <select
          class="select w-full max-w-xs select-primary"
          v-model="form.is_open"
        >
          <option disabled>Pick your fuse status</option>
          <option :value="1" selected>On</option>
          <option :value="2">Off</option>
        </select>
      </div>

      <div class="mt-5" />
      <progress v-if="loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        Submit
      </button>
    </div>
  </div>
</template>
