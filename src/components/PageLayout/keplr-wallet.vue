<script setup lang="ts">
import useKeplr from "@/def-composables/useKeplr";
import { useAddress } from "@/def-composables/useAddress";
import { reactive } from "vue";
import emitter from "@/utils/event-bus";

const { address } = useAddress();
const { isKeplrAvailable, connectToKeplr } = useKeplr();
const state = reactive({
  connecting: false,
  username: ""
});

const tryToConnectToKeplr = (): void => {
  state.connecting = true;

  const onKeplrConnect = async () => {
    state.connecting = false;
    emitter.emit("keplrConnected", true);
  };

  const onKeplrError = (): void => {
    state.connecting = false;
    emitter.emit("keplrConnected", false);
  };

  connectToKeplr(onKeplrConnect, onKeplrError);
};
</script>
<template>
  <div>
    <span v-if="!isKeplrAvailable" class="text-base">
      Please
      <a
        href="https://www.keplr.app/download"
        target="_blank"
        class="font-bold text-primary"
        >Install Keplr Wallet Extension</a
      >
      first.
    </span>
    <button
      v-if="!address"
      class="btn btn-primary normal-case"
      :disabled="!isKeplrAvailable"
      @click="tryToConnectToKeplr"
    >
      Connect Keplr Wallet
    </button>
    <span
      v-else
      class="inline-block border border-primary rounded-md px-4 py-2 text-secondary"
      >{{ address }}</span
    >
  </div>
</template>
