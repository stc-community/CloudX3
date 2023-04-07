import { defineStore } from "pinia";
import { store } from "@/store";
import type { Event } from "nostr-tools";
import type { HoleInfo } from "@/views/cod/actors/type";
import type { OrderForm } from "@/views/dao/api/use-order";

export type modalType = {
  event: Event;
  hole: HoleInfo;
  order: OrderForm;
};

export const useModalStore = defineStore({
  id: "modal-settings",
  state: (): modalType => ({
    event: null,
    hole: null,
    order: null
  }),
  getters: {
    getEvent(): Event {
      return this.event;
    },
    getHole(): HoleInfo {
      return this.hole;
    },
    getOrder(): OrderForm {
      return this.order;
    }
  },
  actions: {
    setEvent(e: Event) {
      this.event = e;
    },
    setHole(h: HoleInfo) {
      this.hole = h;
    },
    setOrder(o: OrderForm) {
      this.order = o;
    }
  }
});

export function useModalStoreHook() {
  return useModalStore(store);
}
