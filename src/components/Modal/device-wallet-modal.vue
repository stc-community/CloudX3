<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
import { clone } from "lodash";
import { loadData } from "@/utils/shared";
import emitter from "@/utils/event-bus";

const loading = ref(false);
const form = reactive({
  address: ""
});

const res = ref({
  code: -1
});
const handleSubmit = () => {
  const formData = clone(form);
  formData.instructions = window.btoa(formData.instructions);
  formData.telemetries = window.btoa(formData.telemetries);

  loading.value = true;
  loadData(res, "iot.device.add", formData, loading, () => {
    loading.value = false;
    emitter.emit("refreshDevices");
  });
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="device-wallet-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[600px]">
      <label
        for="device-wallet-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="ri:wallet-fill"
          width="25px"
          height="25px"
        />
        <h3>Device Wallet</h3>
      </div>
      <div class="form-control mt-8">
        <label class="label">
          <span class="label-text">Address</span>
        </label>

        <input
          type="text"
          :placeholder="t('common.type here')"
          v-model="form.address"
          class="input input-primary w-full"
        />

        <div class="mt-2">
          <progress
            v-if="loading"
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
    </div>
  </div>
</template>
