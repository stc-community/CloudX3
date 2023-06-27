<script setup lang="ts">
import { showEventModal } from "@/utils/shared";
import type { Event } from "nostr-tools";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();

defineProps<{
  event?: Event;
}>();
</script>

<template>
  <label
    class="btn btn-success w-40 text-white rounded-full"
    for="event-modal"
    @click="showEventModal(event)"
  >
    <IconifyIconOnline
      class="mr-2"
      icon="wpf:security-checked"
      width="25px"
      height="25px"
    />
    {{ t("common.verified") }}
  </label>
</template>
