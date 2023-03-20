<script setup lang="ts">
import { reactive, ref } from "vue";
import { getDaoContract } from "@/utils/contract/dao";

type Form = {
  name: string;
  description: string;
  jsoninfo: string;
};

type KV = {
  k: string;
  v: string;
};

const form: Form = reactive({
  name: "",
  description: "",
  jsoninfo: ""
});

const configuration: Array<KV> = reactive([
  {
    k: "",
    v: ""
  }
]);
const handleClickAdd = () => {
  configuration.push({
    k: "",
    v: ""
  });
};
const handleClickRemove = i => {
  configuration.splice(i, 1);
};

const loading = ref(false);
const handleSubmit = async () => {
  // prepare dao function params
  const map = {};
  configuration.forEach(c => {
    map[c.k] = c.v;
  });
  form.jsoninfo = window.btoa(JSON.stringify(map));
  loading.value = true;

  debugger;
  const contract = await getDaoContract();

  try {
    const transaction = await contract.createDao(
      form.name,
      form.description,
      form.jsoninfo
    );
    await transaction.wait();
    window.location.reload();
  } catch (e) {
    loading.value = false;
    window.alert(e.message);
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="newdao-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="newdao-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="eos-icons:organisms"
          width="25px"
          height="25px"
        />
        <h3>New Dao</h3>
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
          <span class="label-text">Description</span>
        </label>
        <input
          type="text"
          v-model="form.description"
          placeholder="Type here"
          class="input input-primary w-full"
        />

        <label class="label mt-2">
          <span class="label-text">Configuration</span>
        </label>
        <div
          class="grid grid-cols-5 gap-3 mb-2"
          v-for="(i, k) in configuration"
        >
          <input
            type="text"
            placeholder="Key"
            v-model="i.k"
            class="input input-primary col-span-2"
          />
          <input
            type="text"
            placeholder="Value"
            v-model="i.v"
            class="input input-primary col-span-2"
          />
          <button
            class="btn btn-primary col-span-1"
            @click="handleClickAdd"
            v-if="k === configuration.length - 1"
          >
            Add
          </button>
          <button
            class="btn btn-error col-span-1 text-white"
            @click="handleClickRemove(k)"
            v-else
          >
            Remove
          </button>
        </div>
      </div>

      <div class="mt-5" />
      <progress v-if="loading" class="progress progress-primary" />
      <button v-else class="btn btn-primary w-full" @click="handleSubmit">
        Submit
      </button>
    </div>
  </div>
</template>
