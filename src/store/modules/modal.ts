import { defineStore } from "pinia";
import { store } from "@/store";
import type { Event } from "nostr-tools";
import type { HoleInfo } from "@/views/cod/actors/type";

export type modalType = {
  event: Event;
  hole: HoleInfo;
};

export const useModalStore = defineStore({
  id: "modal-settings",
  state: (): modalType => ({
    event: null,
    hole: null
  }),
  getters: {
    getEvent(): Event {
      return this.event;
    },
    getHole(): HoleInfo {
      return this.hole;
    }
  },
  actions: {
    setEvent(e: Event) {
      this.event = e;
    },
    setHole(h: HoleInfo) {
      this.hole = h;
    }
  }
});

export function useModalStoreHook() {
  return useModalStore(store);
}
