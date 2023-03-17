<script setup lang="ts">
import { reactive, onBeforeUnmount } from "vue";
import type { EventLog } from "ethers";
import {getDaoContract} from "@/utils/contract/dao";
import {Base64} from "js-base64";

defineOptions({
  name: "newdao-modal"
});

const PARAM = {
  jobID: "273cd4ca220749c5831e598f718f11d6",
  oracle: "0x248E10ec1C54CB570F7A15933286BAa1D59B70c0",
  request_url: "https://stc-test.gw105.oneitfarm.com/brige/providers/deployment"
};

const data = reactive({
  res: "",
  loading: false,
  // hash: "0x634647f1eef0655c27adac3531b3f1de45f209e4cea971870fa012d8ba90b986",
  hash: "",
  requestData: "",
  daoName: "",
  daoDescription: "",
  daoJson: "",
  daoImg: "",

  daoUrl: "",
  resReady: false
});

let contract;
onBeforeUnmount(() => {
  contract?.off("*");
});


const handleSubmit = async () => {
  data.loading = true;

  contract = await getDaoContract();

  try {
    console.log(contract);
    const transaction = await contract.createDao(
      data.daoName,
      data.daoDescription,
      Base64.encode(data.daoJson)
    );
    console.log(transaction);
    await transaction.wait();
    console.log(transaction);
    data.hash = transaction.hash;
    const resule = await contract.getDao();
    console.log(resule);
    data.loading = false;
  } catch (e) {
    data.loading = false;
    console.log(e);
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="newdao-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-[600px]">
      <label
        for="newdao-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="fluent-mdl2:redeploy"
          width="25px"
          height="25px"
        />
        <h3>New Dao</h3>
      </div>
      <div class="form-control mt-8">
        <h3 class="font-bold text-lg">Dao Info</h3>
        <p class="py-4">
          <input
            v-model="data.daoName"
            type="text"
            placeholder="Dao name"
            class="input input-bordered input-primary w-full"
          />
        </p>
        <textarea
          class="textarea textarea-primary h-[100px]"
          placeholder="Description."
          v-model="data.daoDescription"
        />
        <textarea
          class="textarea textarea-primary h-[100px]"
          style="margin-top: 20px"
          placeholder="Json."
          v-model="data.daoJson"
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
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
