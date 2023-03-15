<script setup lang="ts">
import { useModalStore } from "@/store/modules/modal";
import { getCodConrtact } from "@/utils/contract/cod";
import { getRequestID } from "@/utils/contract/web3";
import { reactive, onBeforeUnmount, onMounted } from "vue";

defineOptions({
  name: "cod-call"
});

const eventStore = useModalStore();

const data = reactive({
  res: "",
  loading: true,
  // hash: "0x634647f1eef0655c27adac3531b3f1de45f209e4cea971870fa012d8ba90b986",
  hash: "",
  requestID: "",
  requestData: "",
  resReady: false
});

let contract;
onMounted(async () => {
  contract = await getCodConrtact();
  data.loading = false;

  contract.on("*", event => {
    const id = event.log.args[0];

    if (id === data.requestID) {
      data.resReady = true;
      handleCheck();
    }
  });
});

onBeforeUnmount(() => {
  contract.off("*");
});

const handleSubmit = async () => {
  data.requestID = getRequestID();

  data.loading = true;
  try {
    const transaction = await contract.CallCOD(
      data.requestID,
      "s105",
      "https://wasmcloud-httpserver.gw105.oneitfarm.com/api/counter/zhangchao",
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
      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="mdi:function"
          width="25px"
          height="25px"
        />
        <h3>Call Function</h3>
      </div>
      <div class="form-control mt-8">
        <textarea
          class="textarea textarea-primary h-[100px]"
          placeholder="Input your request data"
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
            Submit
          </button>
        </div>
      </div>
      <div
        v-if="data.hash"
        class="text-left mt-2 border border-primary rounded-md p-2 text-slate-500 text-sm"
      >
        <p class="uppercase">Transaction</p>
        <a
          class="link link-primary text-xs break-all leading-3"
          target="_blank"
          :href="`https://sepolia.etherscan.io/tx/${data.hash}`"
          >{{ data.hash }}</a
        >

        <p class="uppercase mt-5">Request ID</p>
        <p class="text-xs text-primary break-all">{{ data.requestID }}</p>

        <p class="uppercase mt-5">Result</p>
        <pre v-if="data.resReady" class="text-xs text-primary break-all">{{
          data.res
        }}</pre>
        <progress v-else class="progress progress-primary" />
      </div>
    </div>
  </div>
</template>
