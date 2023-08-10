<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
import { clone } from "lodash";
import { loadData } from "@/utils/shared";
import emitter from "@/utils/event-bus";

const loading = ref(false);
const form = reactive({
  // name: "",
  // protocol: "HTTP",
  // address: "",
  // driver_sku: "",
  // driver_image: "",
  // instructions: "",
  // telemetries: ""

  name: "test-thermometer",
  protocol: "HTTP",
  address: "thermometer.devices:11111",
  driver_sku: "thermometer",
  driver_image: "edgenesis/thermometer:v0.0.1",
  instructions: "",
  telemetries: ""
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
    // 请求成功，刷新页面
    if (res.value?.code === 200) {
      emitter.emit("refreshDevices");
    }
  });
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="device-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[600px]">
      <label
        for="device-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="mingcute:plugin-fill"
          width="25px"
          height="25px"
        />
        <h3>{{ t("iot.new device") }}</h3>
      </div>
      <div class="form-control mt-8">
        <div v-for="(i, k) in Object.keys(form)" :key="k">
          <label class="label">
            <span class="label-text">{{ t("iot." + i) }}</span>
          </label>

          <textarea
            v-if="i === 'instructions' || i === 'telemetries'"
            class="textarea textarea-primary h-[100px] w-full"
            :placeholder="t('container.paste yaml')"
            v-model="form[i]"
          />
          <input
            v-else
            type="text"
            :placeholder="t('common.type here')"
            v-model="form[i]"
            class="input input-primary w-full"
          />
        </div>

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
