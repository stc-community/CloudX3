<script setup lang="ts">
import { useAccountStore } from "@/store/modules/account";
import { useLang } from "@/hooks/useLang";
import { storageSession } from "@pureadmin/utils";
import { md5 } from "@/utils/shared";
const { t } = useLang();

const accountStore = useAccountStore();
const disconnectWallet = async () => {
  if (accountStore.address) {
    const cacheKey = await md5(accountStore.address);
    storageSession().removeItem(cacheKey);
    window.location.reload();
  }
};
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
        <h2 class="card-title text-sm">{{ t("common.wallet address") }}</h2>
        <span class="text-[10px] break-all">{{ accountStore.address }}</span>

        <h2 class="card-title text-sm">{{ t("common.public key") }}</h2>
        <span class="text-[10px] break-all">{{ accountStore.publicKey }}</span>
        <!--        <label for="key-modal" class="btn btn-success btn-sm">{{-->
        <!--          t("common.update")-->
        <!--        }}</label>-->
        <label
          @click="disconnectWallet"
          class="btn btn-success btn-sm"
          style="text-transform: capitalize"
        >
          {{ t("common.disconnect") }}</label
        >
      </div>
    </div>
  </div>

  <label
    v-else
    for="key-modal"
    class="btn btn-primary"
    style="text-transform: capitalize"
  >
    <IconifyIconOnline icon="carbon:wallet" width="30px" height="30px" />
    {{ t("common.connect") }}</label
  >
</template>

<style scoped></style>
