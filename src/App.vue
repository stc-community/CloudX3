<script setup lang="ts">
import { onBeforeMount } from "vue";
import AccountModal from "@/components/Modal/account.vue";
import EventModal from "@/components/Modal/event.vue";
import CodCallModal from "@/components/Modal/cod-call.vue";
import DeploymentModal from "@/components/Modal/new-deployment.vue";
import MeshModal from "@/components/Modal/mesh-modal.vue";
import CreatDaoModal from "@/components/Modal/newDao.vue";
import NewProviderModal from "@/components/Modal/new-provider.vue";
import NewActorModal from "@/components/Modal/new-actor.vue";
import newApiProvider from "./components/Modal/new-api-provider.vue";
import NewApiModal from "./components/Modal/new-api.vue";
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
  <DeploymentModal />
  <MeshModal />
  <CreatDaoModal />
  <NewProviderModal />
  <NewActorModal />
  <newApiProvider />
  <NewApiModal />
</template>
