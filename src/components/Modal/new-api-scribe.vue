<script setup lang="ts">
import { reactive, ref } from "vue";
import { getTokenContract } from "@/utils/contract/token";
import { useModalStore } from "@/store/modules/modal";
import { handleEtherError } from "@/utils/shared";

const store = useModalStore();

const form = reactive({
  times: 100
});

const loading = ref(false);
const handleSubmit = async () => {
  loading.value = true;
  const contract = await getTokenContract();

  try {
    // console.log(
    //   store.getOrder.daoId,
    //   store.getOrder.marketId,
    //   form.times,
    //   store.getOrder.orderPrice
    // );

    const transaction = await contract.createOrder(
      store.getOrder.daoId,
      store.getOrder.marketId,
      form.times,
      store.getOrder.orderPrice
    );

    await transaction.wait();
    window.location.reload();
  } catch (e) {
    loading.value = false;
    handleEtherError(e);
    // window.alert(e.message);
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="new-api-scribe-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="new-api-scribe-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <div class="flex items-center">
        <IconifyIconOnline
          class="mr-2"
          icon="tabler:api-app"
          width="25px"
          height="25px"
        />
        <h3>Subscribe API</h3>
      </div>

      <div class="form-control w-full mt-5">
        <label class="label mt-2">
          <span class="label-text">Subscription times</span>
        </label>
        <input
          type="number"
          v-model="form.times"
          placeholder="Type here"
          class="input input-primary w-[200px]"
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
