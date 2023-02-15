import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    addCount() {
      this.count++;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
