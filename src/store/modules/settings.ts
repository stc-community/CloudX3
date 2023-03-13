import { defineStore } from "pinia";
import { store } from "@/store";
import { setType } from "./types";
import { getConfig } from "@/config";

export const useSettingStore = defineStore({
  id: "pure-setting",
  state: (): setType => ({
    title: getConfig().Title
  }),
  getters: {
    getTitle() {
      return this.title;
    }
  },
  actions: {
    CHANGE_SETTING({ key, value }) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key)) {
        this[key] = value;
      }
    },
    changeSetting(data) {
      this.CHANGE_SETTING(data);
    }
  }
});

export function useSettingStoreHook() {
  return useSettingStore(store);
}
