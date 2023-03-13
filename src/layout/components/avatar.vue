<script setup lang="ts">
import { useAccountStore } from "@/store/modules/account";

const accountStore = useAccountStore();
</script>

<template>
  <div
    v-if="accountStore.publicKey"
    class="dropdown dropdown-hover dropdown-left"
  >
    <label tabindex="0" class="avatar online placeholder">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
        <span class="text-xl">{{ accountStore.name }}</span>
      </div>
    </label>
    <div
      tabindex="0"
      class="dropdown-content card w-[400px] shadow bg-primary text-primary-content"
    >
      <div class="card-body px-4 py-3">
        <h2 class="card-title text-sm">Public Key</h2>

        <span class="text-[10px] break-all">{{ accountStore.publicKey }}</span>
        <label for="key-modal" class="btn btn-success btn-sm">Update</label>
      </div>
    </div>
  </div>

  <label v-else for="key-modal" class="btn btn-primary">Connect</label>
</template>

<style scoped></style>
