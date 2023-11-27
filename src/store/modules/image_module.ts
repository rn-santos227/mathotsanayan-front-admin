import { defineStore } from "pinia";

export const useImageModule = defineStore("image", {
  state: () => ({
    isLoading: false as boolean,
  }),

  actions: {},
});
