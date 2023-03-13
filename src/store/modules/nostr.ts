import { defineStore } from "pinia";
import { store } from "@/store";
import { storageLocal } from "@pureadmin/utils";
import Nostr from "@/utils/nostr";
import { useAccountStore } from "./account";

export type nostrType = {
  url: string;
  nostr: Nostr;
};

export const useNostrStore = defineStore({
  id: "nostr-settings",
  state: (): nostrType => ({
    url: storageLocal().getItem("nostr_url") || "",
    nostr: null
  }),
  getters: {
    getUrl() {
      return this.url;
    }
  },
  actions: {
    SET_URL(url: string) {
      this.url = url;
    },
    saveUrl(url: string) {
      this.SET_URL(url);
      storageLocal().setItem("nostr_url", url);

      this.setupNostr();
    },
    async asyncGetNostrInstance(): Promise<Nostr> {
      if (!this.nostr) {
        await this.setupNostr();
      }

      return this.nostr;
    },
    async setupNostr() {
      if (this.nostr) {
        try {
          this.nostr.close();
        } catch (e) {
          // ignore error
        }
      }

      const sk = useAccountStore().getPrivateKey;
      const url = this.url;

      const nostr = new Nostr(sk, url);
      await nostr.init();

      this.nostr = nostr;
    }
  }
});

export function useNostrStoreHook() {
  return useNostrStore(store);
}
