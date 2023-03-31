<script setup lang="ts">
import { reactive, ref } from "vue";
import { loadData } from "@/utils/shared";

type FormData = {
  name: string;
  version: string;
  oci: string;
  capabilities: string;
  smithy: string; // provider only
};

const form: FormData = reactive({
  name: "",
  version: "",
  oci: "",
  capabilities: "",
  smithy: ""
});
const loading = ref(false);
const result = reactive({});
const handleSubmit = () => {
  loadData(result, "cod.market.provideradd", form, loading, () => {
    window.location.reload();
  });
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="new-provider-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="new-provider-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="healthicons:provider-fst"
          width="25px"
          height="25px"
        />
        <h3>New Provider</h3>
      </div>

      <div class="form-control w-full mt-5">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          v-model="form.name"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Version</span>
        </label>
        <input
          type="text"
          v-model="form.version"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">OCI</span>
        </label>
        <input
          type="text"
          v-model="form.oci"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Capabilities</span>
        </label>
        <textarea
          v-model="form.capabilities"
          placeholder="Type here"
          class="textarea textarea-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Smithy</span>
        </label>
        <textarea
          v-model="form.smithy"
          placeholder="Type here"
          class="textarea textarea-primary w-full"
        />
      </div>

      <div class="mt-5" />
      <progress v-if="loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        Submit
      </button>
    </div>
  </div>
</template>
