<script setup lang="ts">
import { useModalStore } from "@/store/modules/modal";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

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
        <h3 class="font-bold text-lg text-success">
          {{ t("common.message verified") }}
        </h3>
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

        <p class="uppercase text-success mt-5">{{ t("common.pub key") }}</p>
        <p class="mt-1 break-all">{{ eventStore.event?.pubkey }}</p>

        <p class="uppercase text-success mt-5">{{ t("common.sig") }}</p>
        <p class="mt-1 break-all">{{ eventStore.event?.sig }}</p>
      </div>
      <div class="modal-action">
        <label for="event-modal" class="btn btn-success text-white"
          >{{ t("common.yay") }}!</label
        >
      </div>
    </div>
  </div>
</template>
