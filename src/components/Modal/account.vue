<script setup lang="ts">
import { useAccountStore } from "@/store/modules/account";
import { ref } from "vue";

defineOptions({
  name: "account"
});

const privateKey = ref("");
const accountStore = useAccountStore();

const handleSubmit = () => {
  const err = accountStore.savePrivateKey(privateKey.value);
  if (err) {
    window.alert(err);
  } else {
    window.location.reload();
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="key-modal" class="modal-toggle" />
  <div class="modal backdrop-blur-sm">
    <div class="modal-box w-11/12 max-w-xl relative">
      <label
        for="key-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <h3 class="font-bold text-lg">Input your Private Key</h3>
      <p class="py-4">
        <input
          v-model="privateKey"
          type="text"
          placeholder="Type your key here"
          class="input input-bordered input-primary w-full"
        />
      </p>
      <div class="modal-action">
        <label for="key-modal" class="btn btn-primary" @click="handleSubmit"
          >Yay!</label
        >
      </div>
    </div>
  </div>
</template>
