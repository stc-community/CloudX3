import { defineStore } from "pinia";
import { store } from "@/store";
import type { Event } from "nostr-tools";

export type modalType = {
  event: Event;
};

export const useModalStore = defineStore({
  id: "modal-settings",
  state: (): modalType => ({
    event: null
  }),
  getters: {
    getEvent(): Event {
      return this.event;
    }
  },
  actions: {
    setEvent(e: Event) {
      this.event = e;
    }
  }
});

export function useModalStoreHook() {
  return useModalStore(store);
}
