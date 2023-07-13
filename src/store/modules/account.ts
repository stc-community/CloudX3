import { defineStore } from "pinia";
import { store } from "@/store";
import { accountType } from "./types";
import { getPublicKey } from "nostr-tools";
import { storageLocal } from "@pureadmin/utils";

export const useAccountStore = defineStore({
  id: "account-settings",
  state: (): accountType => ({
    name: "",
    publicKey: "",
    privateKey: storageLocal().getItem("sk") || ""
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
    init() {
      if (this.privateKey) {
        this.savePrivateKey(this.privateKey);
      }
    },
    savePrivateKey(sk: string): string {
      try {
        const pk = getPublicKey(sk);
        this.SET_PRIVATEKEY(sk);
        this.SET_PUBLICKEY(pk);
        this.SET_NAME(pk.substring(0, 2));
        storageLocal().setItem("sk", sk);
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
