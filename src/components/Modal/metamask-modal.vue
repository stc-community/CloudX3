<script setup lang="ts">
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
</script>

<template>
  <dialog id="metamask_required" class="modal">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">{{ t("tips.title") }},</h3>
      <p class="py-4">{{ t("tips.description") }}</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <a
          class="btn btn-outline btn-primary"
          href="https://metamask.io/"
          target="__blank"
          >{{ t("tips.btn1") }}</a
        >
        <button class="btn">{{ t("tips.btn2") }}</button>
      </div>
    </form>
  </dialog>
</template>

<style scoped></style>
