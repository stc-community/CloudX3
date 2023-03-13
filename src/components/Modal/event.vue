<script setup lang="ts">
import { useModalStore } from "@/store/modules/modal";

defineOptions({
  name: "event"
});

const eventStore = useModalStore();
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="event-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="flex items-center">
        <h3 class="font-bold text-lg text-success">Message verified</h3>
        <IconifyIconOnline
          class="text-success ml-2"
          icon="wpf:security-checked"
          width="25px"
          height="25px"
        />
      </div>
      <div class="text-sm leading-5 mt-5">
        <p class="uppercase text-success">id</p>
        <p class="mt-1 break-all">{{ eventStore.event?.id }}</p>

        <p class="uppercase text-success mt-5">pub key</p>
        <p class="mt-1 break-all">{{ eventStore.event?.pubkey }}</p>

        <p class="uppercase text-success mt-5">sig</p>
        <p class="mt-1 break-all">{{ eventStore.event?.sig }}</p>
      </div>
      <div class="modal-action">
        <label for="event-modal" class="btn btn-success text-white">Yay!</label>
      </div>
    </div>
  </div>
</template>
