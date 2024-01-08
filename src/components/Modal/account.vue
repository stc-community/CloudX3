<script setup lang="ts">
import { ref } from "vue";
import { useLang } from "@/hooks/useLang";
const { t } = useLang();
import { getNewNostrPrivateKey, md5 } from "@/utils/shared";
import { getPublicKey } from "nostr-tools";
import { getUserHubContract } from "@/utils/contract/user-hub";
import { signMessage, getWalletAddres } from "@/utils/contract/web3";
import { handleEtherError, decrypt, encrypt } from "@/utils/shared";
import { useAccountStore } from "@/store/modules/account";

const privateKey = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  const address = await getWalletAddres();
  const contract = await getUserHubContract();
  const data = await contract.getUserInfo(address);
  console.log(data);
  console.log(address);
  console.log(contract);
  if (!data[0]) {
    // register
    privateKey.value = getNewNostrPrivateKey();
    console.log(privateKey);
    const publicKey = getPublicKey(privateKey.value);

    let encryptKey;
    try {
      loading.value = true;
      encryptKey = await signMessage("CloudX3");
      console.log(encryptKey);
    } catch (e) {
      window.alert(t("user.cancelSign"));
      loading.value = false;
      return;
    }

    try {
      loading.value = true;
      const nostrEncryptKey = encrypt(privateKey.value, encryptKey);
      console.log(nostrEncryptKey);
      console.log(decrypt(nostrEncryptKey, encryptKey));
      console.log(
        "用户信息\r\n钱包地址:%s\r\n签名结果:%s\r\nNostr公钥:%s\r\nNostr明文私钥:%s\r\nNostr加密私钥:%s",
        await getWalletAddres(),
        encryptKey,
        publicKey,
        privateKey.value,
        nostrEncryptKey
      );
      const transaction = await contract.registerUser(
        publicKey,
        nostrEncryptKey,
        md5(publicKey)
      );

      await transaction.wait();
      window.location.reload();
      useAccountStore().savePrivateKey(privateKey.value);
    } catch (e) {
      loading.value = false;
      handleEtherError(e);
    }
  } else {
    try {
      const chainPrivateKey = data[1].privateKey;
      const signKey = await signMessage("CloudX3");
      const truePrivateKey = decrypt(chainPrivateKey, signKey);
      useAccountStore().savePrivateKey(truePrivateKey);
      window.location.reload();
    } catch (e) {
      window.alert(
        "Please sign the message for build security tunnel with server"
      );
      // handleEtherError(e);
    }
  }
};
</script>
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="key-modal" class="modal-toggle" />
  <div class="modal backdrop-blur-sm">
    <div class="modal-box w-11/12 max-w-xl relative">
      <label
        for="key-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >

      <h3 class="font-bold text-lg">{{ t("user.modal title") }}</h3>
      <p class="py-4">{{ t("user.modal description") }}</p>
      <div class="modal-action">
        <label
          class="btn btn-primary"
          :class="{ 'btn-disabled': loading }"
          @click="handleSubmit"
        >
          <span v-if="loading" class="loading loading-spinner" />
          <span>{{ t("user.join now") }}!</span>
        </label>
      </div>
    </div>
  </div>
</template>
