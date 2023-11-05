import { defineStore } from "pinia";

export const useDasboardModule = defineStore("dashboard", {
  state: () => ({
    isLoading: false as boolean,
    isTableLoading: false,
  }),

  actions: {},
});
