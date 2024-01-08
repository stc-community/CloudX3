import { defineStore } from "pinia";
import { store } from "@/store";
import { accountType } from "./types";
import { getPublicKey } from "nostr-tools";
// import { storageLocal } from "@pureadmin/utils";
import { getUserHubContract } from "@/utils/contract/user-hub";
import { handleEtherError, decrypt, md5 } from "@/utils/shared";
import { getWalletAddres, signMessage } from "@/utils/contract/web3";
import { storageSession } from "@pureadmin/utils";

export const useAccountStore = defineStore({
  id: "account-settings",
  state: (): accountType => ({
    name: "",
    address: "",
    publicKey: "",
    privateKey: "" //storageLocal().getItem("sk") || ""
  }),
  getters: {
    getPublicKey() {
      return this.publicKey;
    },
    getPrivateKey() {
      return this.privateKey;
    }
  },
  actions: {
    SET_NAME(name: string) {
      this.name = name;
    },
    SET_PUBLICKEY(key: string) {
      this.publicKey = key;
    },
    SET_PRIVATEKEY(key: string) {
      this.privateKey = key;
    },
    SET_ADDRESS(key: string) {
      this.address = key;
    },
    async init(): Promise<any> {
      try {
        const address = await getWalletAddres();
        const contract = await getUserHubContract();
        const data = await contract.getUserInfo(address);
        if (!data[0]) return;

        const { privateKey } = data[1];
        try {
          const cacheKey = await md5(address);
          const signKey = storageSession().getItem(cacheKey) as string;
          if (!signKey) {
            return;
          }
          const truePrivateKey = decrypt(privateKey, signKey);
          this.SET_ADDRESS(address);
          this.savePrivateKey(truePrivateKey);
        } catch (e) {
          window.alert(
            "Please sign the message for build security tunnel with server"
          );
          // handleEtherError(e);
        }
      } catch (e) {
        handleEtherError(e);
      }
    },
    savePrivateKey(sk: string): string {
      try {
        const pk = getPublicKey(sk);
        this.SET_PRIVATEKEY(sk);
        this.SET_PUBLICKEY(pk);
        this.SET_NAME(pk.substring(0, 2));
        // storageLocal().setItem("sk", sk);
        return "";
      } catch (e) {
        return e.message;
      }
    }
  }
});

export function useAccountStoreHook() {
  return useAccountStore(store);
}
