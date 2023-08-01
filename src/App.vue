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
import newApiScribe from "./components/Modal/new-api-scribe.vue";
import { useNostrStore } from "./store/modules/nostr";
import NewPod from "./components/Modal/new-pod.vue";
import MonitorModal from "./components/Modal/monitor-modal.vue";
import newFuseRule from "./components/Modal/new-fuse-rule.vue";
import newRateLimitRule from "./components/Modal/new-rate-limit-rule.vue";
import ServiceMonitorModal from "./components/Modal/service-monitor-modal.vue";
// import MetamaskModal from "./components/Modal/metamask-modal.vue";

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
  <newApiScribe />
  <NewPod />
  <MonitorModal />
  <newFuseRule />
  <newRateLimitRule />
  <ServiceMonitorModal />
</template>
