<script setup lang="ts">
import { onBeforeMount } from "vue";
import AccountModal from "@/components/Modal/account.vue";
import EventModal from "@/components/Modal/event.vue";
import CodCallModal from "@/components/Modal/cod-call.vue";
import { useNostrStore } from "./store/modules/nostr";

defineOptions({
  name: "app"
});

onBeforeMount(async () => {
  try {
    useNostrStore().nostr.close();
  } catch (e) {
    // ignore error
  }
});
</script>
<template>
  <router-view />
  <AccountModal />
  <EventModal />
  <CodCallModal />
</template>
